import React from "react"
import { ForceGraph, ForceGraphNode, ForceGraphLink } from 'react-vis-force';

const Graph = () =>
    <ForceGraph simulationOptions={{ height: 300, width: 300 }}>
      <ForceGraphNode node={{ id: 'first-node' }} fill="red" />
      <ForceGraphNode node={{ id: 'second-node' }} fill="blue" />
      <ForceGraphLink link={{ source: 'first-node', target: 'second-node' }} />
    </ForceGraph>

export default Graph