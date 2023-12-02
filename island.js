function getNeighbors(row, col, matrix) {
  
    // Check top
    const top = [ row - 1, col ];
    // Check top right
    const topRight = [ row - 1, col + 1 ];
    // Check right
    const right = [ row, col + 1 ];
    // Check bottom right
    const bottomRight = [ row + 1, col + 1 ]
    // Check bottom
    const bottom = [ row + 1, col ];
    // Check bottom left
    const bottomLeft = [ row + 1, col - 1 ];
    // Check left
    const left = [ row, col - 1 ];
    // Check top left
    const topLeft = [ row - 1, col - 1 ];
    
    // Return neighbors
    const neighbors = [ topLeft, top, topRight, left, right, bottomLeft, bottom, bottomRight ];
  
    // Your code here
    // console.log(neighbors, 'all Neighbors');
    const result = [];
    neighbors.filter(neighbor => {
	const neighborRow = neighbor[0];
	const neighborCol = neighbor[1];

	if (isValidNeighbor(neighbor, matrix)) result.push(neighbor);
    });
    return result;
}

function isValidNeighbor(neighbor, matrix) {
	const neighborRow = neighbor[0];
	const neighborCol = neighbor[1];

	if ((neighborRow >= 0 && neighborRow < matrix.length) && (neighborCol >= 0 && neighborCol < matrix[0].length) && (matrix[neighborRow][neighborCol] === 1)) return true;
}

function countIslands(matrix) {
  
  // Create a visited set to store visited nodes
  // Initialize count to 0
  // Iterate through all indices in matrix
    // If an index contains a 1 and has not been visited, 
    // increment island count and start traversing neighbors
      // DO THE THING (increment island count by 1)
      // Initialize a stack with current index
      // Add stringified version of current index to the visited set
      // While stack contains elements
        // Pop element from stack
        // Get valid neighbors of current element
        // Iterate over neigbors
          // If neighbor has not been visited
            // Add neighbor to stack
            // Mark neighbor as visited
  // Return island count
  
    // Your code here
    const visited = new Set();
    let count = 0;

    matrix.forEach((matrixRow, indexMatrixRow) => {
	matrixRow.forEach((item, itemIndex) => {
	    let index = [indexMatrixRow, itemIndex]; 
	    if (item === 1 && !visited.has(index.toString())) {
		count++;
		const stack = [ index  ];
		//console.log(stack);
		while (stack.length > 0) {
		    let node = stack.pop();
		    let neighbors = getNeighbors(node[0], node[1], matrix);
		    neighbors.forEach(neighbor => {
			if (!visited.has(neighbor.toString())) {
			    stack.push(neighbor);
			    visited.add(neighbor.toString());
			}
		    // zvisited.add(index);
		    });
		}
	    };
    });
    });
    return count;
}

// Uncomment the lines below for local testing
// const matrix = [
//                 [1,1,1,0,0],
//                 [0,1,1,0,1],
//                 [0,1,1,0,1]
//               ]

// console.log(getNeighbors(1, 1, matrix)); // [[0, 0], [0, 1], [0, 2], [1, 2], [2, 1], [2, 2]]
// console.log(getNeighbors(2,4, matrix)) // [[1,4]]

// const matrix2 = [
//                     [1,1,1,0,1],
//                     [0,0,0,0,1],
//                     [1,0,0,1,0],
//                 ]

// console.log(countIslands(matrix)) // 2
// console.log(countIslands(matrix2)); // 3

module.exports = [countIslands, getNeighbors];
