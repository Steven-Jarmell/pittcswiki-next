declare module "@dagrejs/dagre" {
  export interface GraphLabel {
    rankdir?: string
    align?: string
    nodesep?: number
    edgesep?: number
    ranksep?: number
    marginx?: number
    marginy?: number
    acyclicer?: string
    ranker?: string
    [key: string]: any
  }

  export interface Node {
    label?: string
    width?: number
    height?: number
    x?: number
    y?: number
    [key: string]: any
  }

  export interface Edge {
    label?: string
    width?: number
    minlen?: number
    [key: string]: any
  }

  export class Graph {
    constructor(opts?: GraphLabel)
    setGraph(label: GraphLabel): void
    graph(): GraphLabel
    setNode(v: string, value?: Node): Graph
    node(v: string): Node | undefined
    removeNode(v: string): Graph
    nodes(): string[]
    edges(): Array<{ v: string; w: string }>
    setEdge(v: string, w: string, value?: Edge, name?: string): Graph
    edge(v: string, w: string, name?: string): Edge | undefined
    removeEdge(v: string, w: string, name?: string): Graph
    children(v?: string): string[]
    parent(v: string): string | undefined
    hasNode(v: string): boolean
    hasEdge(v: string, w: string): boolean
    predecessors(v: string): string[]
    successors(v: string): string[]
    neighbors(v: string): string[]
    isMultigraph(): boolean
    isCompound(): boolean
    setDefaultNodeLabel(label: string | ((v: string) => Node)): Graph
    setDefaultEdgeLabel(label: string | ((v: string, w: string) => Edge)): Graph
    nodeCount(): number
    edgeCount(): number
    source(e: { v: string; w: string }): string
    sink(e: { v: string; w: string }): string
    [key: string]: any
  }

  export namespace graphlib {
    class Graph {
      constructor(opts?: GraphLabel)
      setGraph(label: GraphLabel): void
      graph(): GraphLabel
      setNode(v: string, value?: Node): Graph
      node(v: string): Node | undefined
      removeNode(v: string): Graph
      nodes(): string[]
      edges(): Array<{ v: string; w: string }>
      setEdge(v: string, w: string, value?: Edge, name?: string): Graph
      edge(v: string, w: string, name?: string): Edge | undefined
      removeEdge(v: string, w: string, name?: string): Graph
      setDefaultNodeLabel(label: string | ((v: string) => Node)): Graph
      setDefaultEdgeLabel(
        label: string | ((v: string, w: string) => Edge)
      ): Graph
      [key: string]: any
    }
  }

  export function layout(g: Graph | graphlib.Graph): void
  export function preprocess(g: Graph): void
  export function postprocess(g: Graph): void
}
