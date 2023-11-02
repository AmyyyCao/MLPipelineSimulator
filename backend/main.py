from fastapi import FastAPI, HTTPException, Query
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from typing import List
import networkx as nx
import json

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get('/')
def read_root():
    return {'Ping': 'Pong'}


@app.get('/pipelines/parse', response_model=dict)
def parse_pipeline(
    nodes: List[str] = Query(..., title="Nodes", description="List of nodes"),
    edges: List[str] = Query(..., title="Edges", description="List of edges"),
):
    try:
        nodes_data = json.loads(nodes[0])

        edges_data = json.loads(edges[0])

        graph = nx.DiGraph()

        for node in nodes_data:
            graph.add_node(node['id'])

        for edge in edges_data:
            graph.add_edge(edge['source'], edge['target'])

        is_dag = nx.is_directed_acyclic_graph(graph)

        response_data = {
            'num_nodes': len(nodes_data),
            'num_edges': len(edges_data),
            'is_dag': is_dag,
        }
        return response_data
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
