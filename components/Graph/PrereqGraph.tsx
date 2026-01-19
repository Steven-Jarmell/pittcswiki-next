"use client"

import React, { useCallback, useState, useMemo, useEffect } from "react"
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Node,
  Edge,
  Position,
  Panel,
  MarkerType,
} from "@xyflow/react"
import "@xyflow/react/dist/style.css"
import { CourseInfoData } from "@/data/CourseInfoData"
import { CoreCoursesData, CoreCourseData } from "@/data/CoreCoursesData"

// Import requirements data
// Using require because it's a JSON file and might not have type definitions
const COURSE_REQUIREMENTS = require("@/data/requirements.json")

const nodeWidth = 150 // Increased to fit CMPINF 0401
const nodeHeight = 40

const PrereqGraph = () => {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null)
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)
  const [showMath, setShowMath] = useState(true) // New state for Math filter

  // 1. Parse data to create nodes and edges
  const { nodes: initialNodes, edges: initialEdges } = useMemo(() => {
    try {
      const nodes: Node[] = []
      const addedNodes = new Set<string>()
      const nodeWidth = 150
      const nodeHeight = 50

      // Helper to get canonical ID (sanitized)
      const getCanonicalId = (rawId: string): string | null => {
        const courseNumber = rawId.replace(/\D/g, "").replace(/^0+/, "")
        const coreData = CoreCoursesData[courseNumber]
        return coreData ? coreData.code.replace(/\s+/g, "_") : null
      }

      // Helper to add a node
      const addNode = (rawId: string) => {
        const canonicalId = getCanonicalId(rawId)
        if (!canonicalId) return

        if (addedNodes.has(canonicalId)) return

        // Filter out Math courses if showMath is false
        if (!showMath && canonicalId.startsWith("MATH")) return

        const courseNumber = rawId.replace(/\D/g, "").replace(/^0+/, "")
        const coreData = CoreCoursesData[courseNumber]

        addedNodes.add(canonicalId)

        nodes.push({
          id: canonicalId,
          data: {
            label: coreData.code,
            title: coreData.title,
            fullData: coreData,
          },
          position: { x: 0, y: 0 }, // Initial position
          className: "group", // For hover effects
          style: {
            width: nodeWidth,
            height: nodeHeight,
          },
        })
      }

      // 1. Add ALL core courses first
      Object.values(CoreCoursesData).forEach((course) => {
        addNode(course.code)
      })

      // 2. Generate edges from CoreCoursesData
      const nodesMap = new Map(nodes.map((n) => [n.id, n]))
      const edges: Edge[] = []

      Object.values(CoreCoursesData).forEach((course) => {
        const sourceId = getCanonicalId(course.code) // Use course.code for sourceId
        if (!sourceId || !nodesMap.has(sourceId)) return

        // Helper to process requirements
        const processReqs = (reqs: string[], isCoreq: boolean) => {
          reqs.forEach((reqString) => {
            // Extract all course codes from the string (e.g. "MATH 0220", "CS 0441")
            const matches = reqString.match(/\b([A-Z]{2,5})\s*(\d{4})\b/g)
            if (matches) {
              matches.forEach((match) => {
                // Normalize ID (remove space)
                const targetId = getCanonicalId(match.replace(/\s+/g, ""))

                if (targetId && nodesMap.has(targetId)) {
                  // Ensure targetId is not null and exists
                  edges.push({
                    id: `${targetId}-${sourceId}`,
                    source: targetId,
                    target: sourceId,
                    type: "smoothstep",
                    animated: false,
                    style: {
                      stroke: isCoreq ? "#d97706" : "#64748b",
                      strokeWidth: 2.5, // Thicker for better visibility
                      strokeDasharray: isCoreq ? "5,5" : undefined,
                    },
                    markerEnd: {
                      type: MarkerType.ArrowClosed,
                      color: isCoreq ? "#d97706" : "#64748b",
                      width: 20, // Larger arrow
                      height: 20,
                    },
                  })
                }
              })
            }
          })
        }

        processReqs(course.prerequisites, false)
        processReqs(course.corequisites, true)
      })

      // 3. Custom Level-based Layout (Topological Sort approximation)
      const nodeLevels = new Map<string, number>()
      const nodeIncoming = new Map<string, number>()

      // Initialize
      nodes.forEach((node) => {
        nodeLevels.set(node.id, 0)
        nodeIncoming.set(node.id, 0)
      })

      // Count incoming edges (prereqs only)
      edges.forEach((edge) => {
        // Only count prereqs for level calculation (edges without strokeDasharray are prereqs)
        if (!edge.style?.strokeDasharray) {
          nodeIncoming.set(
            edge.target,
            (nodeIncoming.get(edge.target) || 0) + 1
          )
        }
      })

      // Calculate levels (BFS)
      const queue = nodes
        .filter((n) => (nodeIncoming.get(n.id) || 0) === 0)
        .map((n) => n.id)

      // Assign levels based on depth
      // Simple approach: Level = max(prereq levels) + 1
      // We'll do a multi-pass relaxation to handle the graph structure
      let changed = true
      let iterations = 0
      while (changed && iterations < 10) {
        // Limit iterations to prevent infinite loops
        changed = false
        iterations++
        edges.forEach((edge) => {
          if (edge.id.startsWith("e-") || !edge.style?.strokeDasharray) {
            const sourceLevel = nodeLevels.get(edge.source) || 0
            const targetLevel = nodeLevels.get(edge.target) || 0
            if (sourceLevel + 1 > targetLevel) {
              nodeLevels.set(edge.target, sourceLevel + 1)
              changed = true
            }
          }
        })
      }

      // Group by level
      const levels: { [key: number]: Node[] } = {}
      nodes.forEach((node) => {
        const level = nodeLevels.get(node.id) || 0
        if (!levels[level]) levels[level] = []
        levels[level].push(node)
      })

      // Position nodes (Top-to-Bottom Layout)
      const X_SPACING = 200 // Horizontal spacing between nodes
      const Y_SPACING = 150 // Vertical spacing between levels

      const layoutedNodes = nodes.map((node) => {
        const level = nodeLevels.get(node.id) || 0
        const nodesInLevel = levels[level]
        const indexInLevel = nodesInLevel.findIndex((n) => n.id === node.id)

        // Center the row horizontally
        const rowWidth = (nodesInLevel.length - 1) * X_SPACING
        const xOffset = -rowWidth / 2 + indexInLevel * X_SPACING

        return {
          ...node,
          position: {
            x: xOffset,
            y: level * Y_SPACING + 50, // Add top padding
          },
          targetPosition: Position.Top,
          sourcePosition: Position.Bottom,
        }
      })

      return { nodes: layoutedNodes, edges }
    } catch (e: any) {
      console.error("Error building graph:", e)
      return { nodes: [], edges: [] }
    }
  }, [showMath]) // Re-run when showMath changes

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  // Update nodes/edges when initialNodes/initialEdges change (due to showMath)
  useEffect(() => {
    setNodes(initialNodes)
    setEdges(initialEdges)
  }, [initialNodes, initialEdges, setNodes, setEdges])

  // Handle node click
  const onNodeClick = useCallback((event: React.MouseEvent, node: Node) => {
    setSelectedCourse(node.id)
  }, [])

  // Handle node hover
  const onNodeMouseEnter = useCallback(
    (event: React.MouseEvent, node: Node) => {
      setHoveredNode(node.id)
    },
    []
  )

  const onNodeMouseLeave = useCallback(() => {
    setHoveredNode(null)
  }, [])

  // Update styles based on hover/selection
  const visibleNodes = useMemo(() => {
    return nodes.map((node) => {
      const isHovered = hoveredNode === node.id
      const isSelected = selectedCourse === node.id
      const isConnected = hoveredNode
        ? edges.some(
            (e) =>
              (e.source === hoveredNode && e.target === node.id) ||
              (e.target === hoveredNode && e.source === node.id)
          )
        : false

      let opacity = 1
      if (hoveredNode && !isHovered && !isConnected) {
        opacity = 0.3
      }

      // Minimal styling
      const baseClasses =
        "flex items-center justify-center w-full h-full rounded-md transition-all duration-200 cursor-pointer border"
      const colorClasses =
        "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 shadow-sm"

      let stateClasses = "border-slate-300 dark:border-slate-700"
      if (isSelected) {
        stateClasses =
          "border-blue-600 dark:border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 ring-1 ring-blue-600 dark:ring-blue-500"
      } else if (isHovered) {
        stateClasses =
          "border-slate-400 dark:border-slate-500 shadow-md transform -translate-y-0.5"
      } else if (isConnected) {
        stateClasses = "border-slate-400 dark:border-slate-500"
      }

      return {
        ...node,
        style: {
          ...node.style,
          opacity,
        },
        data: {
          ...node.data,
          label: (
            <div className={`${baseClasses} ${colorClasses} ${stateClasses}`}>
              <span className="font-mono text-sm font-bold tracking-tight">
                {node.data.label as string}
              </span>
            </div>
          ),
        },
      }
    })
  }, [nodes, hoveredNode, selectedCourse, edges])

  const visibleEdges = useMemo(() => {
    return edges.map((edge) => {
      const isConnectedToHovered =
        hoveredNode &&
        (edge.source === hoveredNode || edge.target === hoveredNode)

      return {
        ...edge,
        style: {
          ...edge.style,
          opacity: hoveredNode && !isConnectedToHovered ? 0.1 : 1,
          strokeWidth: isConnectedToHovered ? 2 : 1.5,
          stroke: isConnectedToHovered
            ? edge.id.startsWith("c")
              ? "#d97706"
              : "#3b82f6"
            : edge.style?.stroke,
        },
        animated: !!(edge.id.startsWith("c") || isConnectedToHovered),
        zIndex: isConnectedToHovered ? 10 : 0,
      }
    })
  }, [edges, hoveredNode])

  // Get selected course data
  const selectedCourseData = useMemo<CoreCourseData | null>(() => {
    if (!selectedCourse) return null
    const node = nodes.find((n) => n.id === selectedCourse)
    return node ? (node.data.fullData as CoreCourseData) : null
  }, [selectedCourse, nodes])

  // Calculate bounds for translateExtent
  const translateExtent: [[number, number], [number, number]] = useMemo(() => {
    if (nodes.length === 0)
      return [
        [-1000, -1000],
        [1000, 1000],
      ]

    const minX = Math.min(...nodes.map((n) => n.position.x))
    const maxX = Math.max(...nodes.map((n) => n.position.x))
    const minY = Math.min(...nodes.map((n) => n.position.y))
    const maxY = Math.max(...nodes.map((n) => n.position.y))

    const padding = 500
    return [
      [minX - padding, minY - padding],
      [maxX + padding + 300, maxY + padding], // Extra right padding for sidebar
    ]
  }, [nodes])

  return (
    <div className="relative w-full h-[70vh] rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-slate-50 dark:bg-slate-950">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClick}
        onNodeMouseEnter={onNodeMouseEnter}
        onNodeMouseLeave={onNodeMouseLeave}
        fitView
        minZoom={0.2}
        maxZoom={1.5}
        translateExtent={translateExtent}
        nodesDraggable={false}
        attributionPosition="bottom-right"
      >
        <Background color="#94a3b8" gap={20} size={1} className="opacity-20" />
        <Controls
          showInteractive={false}
          className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800"
        />

        {/* Legend & Controls */}
        <Panel position="bottom-left" className="flex flex-col gap-2">
          <div className="bg-white/90 dark:bg-slate-900/90 p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-xs shadow-sm backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-0.5 bg-slate-500"></div>
                <span className="text-slate-600 dark:text-slate-400">
                  Prereq
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-0.5 bg-amber-600 border-t border-dashed border-amber-600"></div>
                <span className="text-slate-600 dark:text-slate-400">
                  Coreq
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={() => setShowMath(!showMath)}
            className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-colors shadow-sm backdrop-blur-sm ${
              showMath
                ? "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300"
                : "bg-white/90 dark:bg-slate-900/90 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800"
            }`}
          >
            {showMath ? "Hide Math Courses" : "Show Math Courses"}
          </button>
        </Panel>
      </ReactFlow>

      {/* Sidebar Details Panel */}
      <div
        className={`absolute top-0 right-0 h-full w-80 bg-white/95 dark:bg-slate-900/95 border-l border-slate-200 dark:border-slate-800 shadow-xl backdrop-blur-md transition-transform duration-300 ease-in-out z-20 overflow-y-auto ${
          selectedCourse ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {selectedCourseData && (
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {selectedCourseData.code}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  {selectedCourseData.title}
                </p>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedCourse(null)
                }}
                className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-slate-400"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {selectedCourseData.description}
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                    Credits
                  </div>
                  <div className="text-lg font-medium text-slate-900 dark:text-white">
                    {selectedCourseData.credits}
                  </div>
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                    Offered
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {Object.entries(selectedCourseData.terms_offered).map(
                      ([term, isOffered]) => {
                        if (!isOffered) return null
                        const termMap: Record<
                          string,
                          { label: string; color: string }
                        > = {
                          fall: { label: "Fall", color: "bg-orange-500" },
                          spring: { label: "Spring", color: "bg-green-500" },
                          summer: { label: "Summer", color: "bg-yellow-400" },
                        }
                        const info = termMap[term] || {
                          label: term,
                          color: "bg-slate-400",
                        }

                        return (
                          <div
                            key={term}
                            className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-xs font-medium text-slate-700 dark:text-slate-300"
                          >
                            <div
                              className={`w-2 h-2 rounded-full ${info.color}`}
                            />
                            {info.label}
                          </div>
                        )
                      }
                    )}
                  </div>
                </div>
              </div>

              {/* Prerequisites Section */}
              {(selectedCourseData.prerequisites.length > 0 ||
                selectedCourseData.corequisites.length > 0) && (
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                    Requirements
                  </div>

                  {selectedCourseData.prerequisites.length > 0 && (
                    <div className="mb-3">
                      <span className="text-xs text-slate-500 block mb-1">
                        Prerequisites:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {selectedCourseData.prerequisites.map(
                          (p: string, i: number) => (
                            <span
                              key={i}
                              className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs font-mono text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700"
                            >
                              {p}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  )}

                  {selectedCourseData.corequisites.length > 0 && (
                    <div className="mb-3">
                      <span className="text-xs text-slate-500 block mb-1">
                        Corequisites:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {selectedCourseData.corequisites.map(
                          (p: string, i: number) => (
                            <span
                              key={i}
                              className="px-2 py-1 bg-amber-50 dark:bg-amber-900/20 rounded text-xs font-mono text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800"
                            >
                              {p}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}

              <a
                href={`https://sci.pitt.edu/academics/undergraduate-majors/computer-science`}
                target="_blank"
                rel="noreferrer"
                className="block w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white text-center rounded-lg text-sm font-medium transition-colors"
              >
                View on SCI Website
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default PrereqGraph
