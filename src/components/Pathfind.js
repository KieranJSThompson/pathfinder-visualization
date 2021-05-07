import React, { useState, useEffect } from "react";
import Node from "./Node";
import Astar from '../algorithms/astar';
import Spot from '../Spot';
import "./Pathfind.css";

const cols = 25;
const rows = 25;

const NODE_START_ROW = 0;
const NODE_START_COL = 0;
const NODE_END_ROW = rows - 1;
const NODE_END_COL = cols - 1;

const Pathfind = () => {
  const [Grid, setGrid] = useState([]);
  const [Path, setPath] = useState([]);
  const [VisitedNodes, setVisitedNodes] = useState([]);

  useEffect(() => {
    initialiseGrid();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const initialiseGrid = () => {
    const grid = new Array(rows);

    for (let i = 0; i < rows; i++) {
      grid[i] = new Array(cols);
    }

    createSpot(grid);
    setGrid(grid);
    addNeighbours(grid);
    const startNode = grid[NODE_START_ROW][NODE_START_COL];
    const endNode = grid[NODE_END_ROW][NODE_END_COL];
    const {path, visitedNodes} = Astar(startNode, endNode);
    startNode.isWall = false;
    endNode.isWall = false;
    setPath(path);
    setVisitedNodes(visitedNodes);
  };

  const createSpot = (grid) => {
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const isStart = (i === NODE_START_ROW && j === NODE_START_COL);
        const isEnd = (i === NODE_END_ROW && j === NODE_END_COL);
        grid[i][j] = new Spot(i, j, isStart, isEnd, rows, cols);
      }
    }
  };

  const addNeighbours = (grid) => {
    for(let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        grid[i][j].addNeighbours(grid);
      }
    }
  }


  const gridWithNodes = (
    <div>
      {Grid.map((row, rowIndex) => {
        return (
          <div className="rowWrapper" key={rowIndex}>
            {row.map((col, colIndex) => {
              const { isStart, isEnd, isWall} = col;
              return (
                <Node
                  key={colIndex}
                  isStart={isStart}
                  isEnd={isEnd}
                  row={rowIndex}
                  col={colIndex}
                  isWall={isWall}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );

  const visualizeShortestPath = (shortestPathNodes) => {
    for (let i = 0; i < shortestPathNodes.length; i++) {
      setTimeout(() => {
        const node = shortestPathNodes[i];
        document.getElementById(`node-${node.x}-${node.y}`).className = 'node node-shortest-path';
      }, 10 * i);
    }
  }

  const visualizePath = () => {
    for (let i = 0; i <= VisitedNodes.length; i++) {
      if (i === VisitedNodes.length) {
        setTimeout(() => {
          visualizeShortestPath(Path);
        }, 2 * i);
      } else {
        setTimeout(() => {
          const node = VisitedNodes[i];
          document.getElementById(`node-${node.x}-${node.y}`).className = 'node node-visited';
        }, 2 * i);
      }
    }
  }

  const resetVisualization = () => {
    window.location.reload();

  }

  return (
    <div className="wrapper">
      <h1>Pathfind Visualiser</h1>
      <button onClick={visualizePath}>visualise pathfinder</button>
      <button onClick={resetVisualization}>reset</button>
      {gridWithNodes}
    </div>
  );
};

export default Pathfind;
