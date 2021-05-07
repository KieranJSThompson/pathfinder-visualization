

  // Spot constructor
  export default function Spot(x, y, isStart, isEnd, rows, cols) {
    this.x = x;
    this.y = y;
    this.isStart = isStart;
    this.isEnd = isEnd;
    this.g = 0;
    this.f = 0;
    this.f = 0;
    this.neighbours = [];
    this.isWall = false;
    if (Math.random(1) < 0.2) {
      this.isWall = true;
    }
    this.previous = undefined;
    this.addNeighbours = function(grid) {
      let i = this.x;
      let j = this.y;
      if (i > 0) this.neighbours.push(grid[i-1][j]);
      if (i < rows - 1) this.neighbours.push(grid[i+1][j]);
      if (j > 0) this.neighbours.push(grid[i][j-1]);
      if (j < cols - 1) this.neighbours.push(grid[i][j+1]);
    }
  }