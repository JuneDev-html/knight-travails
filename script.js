class Square {
  constructor(data = [], children = null, parent = null) {
    this.data = data;
    this.children = children;
    this.parent = parent;
  }
}

const writeChildren = (root) => {
  let x = [-1, -2, -2, -1, 1, 2, 2, 1];
  let y = [-2, -1, 1, 2, 2, 1, -1, -2];
  let children = [];

  for (let i = 0; i < 8; i++) {
    let child = makeChild(root.data[0] + x[i], root.data[1] + y[i]);
    if (child != null) children.push(child);
  }
  return children;
};

const makeChild = (data1, data2) => {
  if (data1 < 0 || data1 > 7 || data2 < 0 || data2 > 7) return null;
  return new Square([data1, data2]);
};

const knightMoves = (currentPosition, goalPosition) => {
  let start = new Square(currentPosition);
  start.children = writeChildren(start);
  let queue = [];
  for (let child of start.children) {
    queue.push(child);
  }
  queue = [start];
  let path = findPath(queue, goalPosition);
  displayResult(path);
};

const findPath = (queue, goal) => {
  let found = false;
  while (!found) {
    let temp = [];
    for (let node of queue) {
      // if found
      if (node.data[0] == goal[0] && node.data[1] == goal[1]) {
        let path = tracePath(node);
        found = true;
        return path;
      } else {
        // write all possible moves of current position as children
        node.children = writeChildren(node);

        // for each move/child:
        for (let move of node.children) {
          move.parent = node; // set current position as parent to possible move
          temp.push(move); // push move into temporary queue
        }
      }
    }
    queue = temp; // make temporary queue the new queue
  }
  return path;
};

const tracePath = (target) => {
  // start path with current position in it
  let path = [target.data];
  // trace path back up putting each parent position into path array
  while (target.parent != null) {
    path.unshift(target.parent.data);
    target = target.parent;
  }
  return path;
};

const displayResult = (path) => {
  let traveledPath = "";
  for (let spot of path) {
    traveledPath += `[${spot}] `;
  }

  console.log(`You made it in ${path.length - 1} moves! \nHere is your path:`);
  console.log(traveledPath);
};

knightMoves([0, 0], [3, 3]);
