import React from 'react';
// import data from './data/data.json';
import { ForceGraph } from "./components/forceGraph";
import './App.css';

const data = {
  nodes: [],
  links: []
};

Array.from(Array(1000).keys()).map(key => {
  data.nodes.push({
    "id": key,
    "name": "number "+ key,
    "gender": "female"
  })
  if(key % 2 === 0 && key > 1) {
    // console.log({
    //   "source": +key - 1,
    //   "target": key
    // });
    data.links.push({
      "source": +key - 1,
      "target": key
    });
    data.links.push({
      "source": +key - 1,
      "target": key - 2
    });
  }
});

function App() {
  const nodeHoverTooltip = React.useCallback((node) => {
    return `<div>     
      <b>${node.name}</b>
    </div>`;
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        Force Graph Example
      </header>
      <section className="Main">
        <ForceGraph linksData={data.links} nodesData={data.nodes} nodeHoverTooltip={nodeHoverTooltip} />
      </section>
    </div>
  );
}

export default App;
