const { Graph, Edge, Vertex } = require('./index')

describe('Graph', () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
  });

  test('addVertex should add a vertex to the adjacency list', () => {
    const vertex = graph.addVertex('A');
    expect(graph.adjacencyList.has(vertex)).toBe(true);
    expect(graph.adjacencyList.get(vertex)).toEqual([]);
  });

  test('addDirectedEdge should add an edge to the adjacency list', () => {
    const vertexA = graph.addVertex('A');
    const vertexB = graph.addVertex('B');
    graph.addDirectedEdge(vertexA, vertexB);
    expect(graph.getNeighbors(vertexA)).toEqual([new Edge(vertexB)]);
  });

  test('getNeighbors should return the neighbors of a vertex', () => {
    const vertexA = graph.addVertex('A');
    const vertexB = graph.addVertex('B');
    const vertexC = graph.addVertex('C');
    graph.addDirectedEdge(vertexA, vertexB);
    graph.addDirectedEdge(vertexA, vertexC);
    expect(graph.getNeighbors(vertexA)).toEqual([new Edge(vertexB), new Edge(vertexC)]);
  });

  test('getNodes should return the nodes of a graph', () => {
    const vertexA = graph.addVertex('A');
    const vertexB = graph.addVertex('B');
    const vertexC = graph.addVertex('C');
    expect(graph.getNodes()).toEqual([vertexA, vertexB, vertexC]);
  });

  test('breadthFirst should traverse the graph in breadth-first order', () => {
    const vertexA = graph.addVertex('A');
    const vertexB = graph.addVertex('B');
    const vertexC = graph.addVertex('C');
    const vertexD = graph.addVertex('D');
    graph.addDirectedEdge(vertexA, vertexB);
    graph.addDirectedEdge(vertexA, vertexC);
    graph.addDirectedEdge(vertexB, vertexD);
    const values = [];
    graph.breadthFirst(vertexA, value => values.push(value));
    expect(values).toEqual(['A', 'B', 'C', 'D']);
  });

  test('depthFirst should traverse the graph in depth-first order', () => {
    const vertexA = graph.addVertex('A');
    const vertexB = graph.addVertex('B');
    const vertexC = graph.addVertex('C');
    const vertexD = graph.addVertex('D');
    graph.addDirectedEdge(vertexA, vertexB);
    graph.addDirectedEdge(vertexA, vertexC);
    graph.addDirectedEdge(vertexB, vertexD);
    const values = [];
    graph.depthFirst(vertexA, value => values.push(value));
    expect
    expect(values).toEqual(['A', 'C', 'B', 'D']);
  });

  test('size should return the number of nodes in the graph', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    expect(graph.size()).toEqual(1);
  });
});
