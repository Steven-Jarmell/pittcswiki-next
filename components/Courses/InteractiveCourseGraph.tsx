"use client"

import React, { useCallback, useState } from "react"
import {
  Background,
  ReactFlow,
  addEdge,
  ConnectionLineType,
  useNodesState,
  useEdgesState,
  Node,
  Position,
} from "@xyflow/react"
import dagre from "@dagrejs/dagre"
import { CoreCoursesData, CoreCourseData } from "@/data/CoreCoursesData"

const position = { x: 0, y: 0 }
const edgeType = "smoothstep"

import "@xyflow/react/dist/style.css"

const nodeStyle = {
  borderRadius: "8px",
  padding: "10px",
  fontSize: "14px",
  fontWeight: "500",
  width: 110,
  height: 40,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}

const getNodeStyle = (nodeId: string, selectedCourse: string | null) => {
  const isMathCourse = ["220", "230", "280"].includes(nodeId)
  const isSelected = nodeId === selectedCourse

  if (isSelected) {
    return {
      ...nodeStyle,
      background: "#f59e0b",
      border: "2px solid #d97706",
      color: "white",
      fontWeight: "bold",
    }
  }

  if (isMathCourse) {
    return {
      ...nodeStyle,
      background: "#e5e7eb",
      border: "2px solid #9ca3af",
      color: "#374151",
    }
  }

  return {
    ...nodeStyle,
    background: "white",
    border: "2px solid black",
    color: "black",
  }
}

const initialNodes: Node[] = [
  {
    id: "220",
    data: { label: "MATH 220" },
    position,
    draggable: false,
    style: getNodeStyle("220", null),
  },
  {
    id: "230",
    data: { label: "MATH 230" },
    position,
    draggable: false,
    style: getNodeStyle("230", null),
  },
  {
    id: "280",
    data: { label: "MATH 280" },
    position,
    draggable: false,
    style: getNodeStyle("280", null),
  },
  {
    id: "401",
    type: "default",
    data: { label: "CMP 401" },
    position,
    draggable: false,
    style: getNodeStyle("401", null),
  },
  {
    id: "441",
    data: { label: "CS 441" },
    position,
    draggable: false,
    style: getNodeStyle("441", null),
  },
  {
    id: "445",
    data: { label: "CS 445" },
    position,
    draggable: false,
    style: getNodeStyle("445", null),
  },
  {
    id: "447",
    data: { label: "CS 447" },
    position,
    draggable: false,
    style: getNodeStyle("447", null),
  },
  {
    id: "449",
    data: { label: "CS 449" },
    position,
    draggable: false,
    style: getNodeStyle("449", null),
  },
  {
    id: "1501",
    data: { label: "CS 1501" },
    position,
    draggable: false,
    style: getNodeStyle("1501", null),
  },
  {
    id: "1502",
    data: { label: "CS 1502" },
    position,
    draggable: false,
    style: getNodeStyle("1502", null),
  },
  {
    id: "1503",
    data: { label: "CS 1503" },
    position,
    draggable: false,
    style: getNodeStyle("1503", null),
  },
]

// CS-only edges (direct prerequisites)
export const csEdges = [
  {
    id: "e401to445",
    source: "401",
    target: "445",
    type: edgeType,
    style: { stroke: "black", strokeWidth: 2 },
  },
  {
    id: "e445to447",
    source: "445",
    target: "447",
    type: edgeType,
    style: { stroke: "black", strokeWidth: 2, strokeDasharray: "5,5" },
  },
  {
    id: "e447to449",
    source: "447",
    target: "449",
    type: edgeType,
    style: { stroke: "black", strokeWidth: 2, strokeDasharray: "5,5" },
  },
  {
    id: "e441to1501",
    source: "441",
    target: "1501",
    type: edgeType,
    style: { stroke: "black", strokeWidth: 2 },
  },
  {
    id: "e441to1502",
    source: "441",
    target: "1502",
    type: edgeType,
    style: { stroke: "black", strokeWidth: 2 },
  },
  {
    id: "e445to1501",
    source: "445",
    target: "1501",
    type: edgeType,
    style: { stroke: "black", strokeWidth: 2 },
  },
  {
    id: "e441to1503",
    source: "441",
    target: "1503",
    type: edgeType,
    style: { stroke: "black", strokeWidth: 2 },
  },
]

// Math prerequisite edges (shown when toggle is ON)
export const mathEdges = [
  {
    id: "e220to441",
    source: "220",
    target: "441",
    type: edgeType,
    style: { stroke: "gray", strokeWidth: 2, opacity: 0.6 },
  },
  {
    id: "e230to441",
    source: "230",
    target: "441",
    type: edgeType,
    style: { stroke: "gray", strokeWidth: 2, opacity: 0.6 },
  },
  {
    id: "e280to441",
    source: "280",
    target: "441",
    type: edgeType,
    style: { stroke: "gray", strokeWidth: 2, opacity: 0.6 },
  },
  {
    id: "e280to1503",
    source: "280",
    target: "1503",
    type: edgeType,
    style: { stroke: "gray", strokeWidth: 2, opacity: 0.6 },
  },
]

export const initialEdges = csEdges

const nodeWidth = 110
const nodeHeight = 40

const getLayoutedElements = (nodes: Node[], edges: any[], direction = "TB") => {
  // Create dagreGraph inside function to ensure it runs on client side only
  const dagreGraph = new dagre.graphlib.Graph().setDefaultEdgeLabel(() => ({}))

  const isHorizontal = direction === "LR"
  dagreGraph.setGraph({
    rankdir: direction,
    align: "UL",
    nodesep: 50,
    ranksep: 60,
  })

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight })
  })

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target)
  })

  dagre.layout(dagreGraph)

  const newNodes = nodes.map((node) => {
    const nodeWithPosition = dagreGraph.node(node.id)
    if (
      !nodeWithPosition ||
      nodeWithPosition.x === undefined ||
      nodeWithPosition.y === undefined
    ) {
      return node
    }

    const targetPos: Position = isHorizontal ? Position.Left : Position.Top
    const sourcePos: Position = isHorizontal ? Position.Right : Position.Bottom

    const newNode: Node = {
      ...node,
      targetPosition: targetPos,
      sourcePosition: sourcePos,
      position: {
        x: nodeWithPosition.x - nodeWidth / 2,
        y: nodeWithPosition.y - nodeHeight / 2,
      },
    }

    return newNode
  })

  return { nodes: newNodes, edges }
}

type InteractiveCourseGraphProps = {
  onCourseClick: (courseId: string) => void
  selectedCourse: string | null
  showMathPrereqs?: boolean
}

const InteractiveCourseGraph: React.FC<InteractiveCourseGraphProps> = ({
  onCourseClick,
  selectedCourse,
  showMathPrereqs = false,
}) => {
  // Calculate layout on client side only
  const { nodes: layoutedNodes, edges: layoutedEdges } = React.useMemo(
    () => getLayoutedElements(initialNodes, initialEdges),
    []
  )

  const [nodes, setNodes, onNodesChange] = useNodesState(layoutedNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges)

  // Update edges when showMathPrereqs changes
  React.useEffect(() => {
    const allEdges = showMathPrereqs ? [...csEdges, ...mathEdges] : csEdges
    setEdges(allEdges)
  }, [showMathPrereqs, setEdges])

  // Update node styles when selectedCourse changes
  React.useEffect(() => {
    setNodes((nds) =>
      nds.map((node) => ({
        ...node,
        style: getNodeStyle(node.id, selectedCourse),
      }))
    )
  }, [selectedCourse, setNodes])

  const onConnect = useCallback(
    (params: any) =>
      setEdges((eds) =>
        addEdge(
          { ...params, type: ConnectionLineType.SmoothStep, animated: true },
          eds
        )
      ),
    [setEdges]
  )

  const onNodeClick = useCallback(
    (_event: React.MouseEvent, node: Node) => {
      onCourseClick(node.id)
    },
    [onCourseClick]
  )

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      onNodeClick={onNodeClick}
      connectionLineType={ConnectionLineType.SmoothStep}
      proOptions={{ hideAttribution: true }}
      fitView
      nodesDraggable={false}
      nodesConnectable={false}
      panOnScroll={false}
      zoomOnScroll={false}
      zoomOnPinch={false}
      panOnDrag={false}
      zoomOnDoubleClick={false}
      minZoom={1}
      maxZoom={1}
      className="cursor-pointer"
    />
  )
}

export default InteractiveCourseGraph
