function changeColor(e){
	let target = e.target;

	if (target.className == 'black'){
		target.className = 'white';
	} else {
		target.className = 'black';
	}
}

function createGrid (COLS, ROWS){
	let body = document.body;

	function createRow () {
		let row = document.createElement('div');

		body.appendChild(row);
		return row;
	}

	function createCols(row){
		for (let i = 0; i < COLS; i++){
			let newColumn = document.createElement('div');

			row.appendChild(newColumn);
		}
	}

	for (let i = 0; i < ROWS; i++){
		let newRow = createRow();

		createCols(newRow);
		body.appendChild(newRow);
	}
}

function gridListen(){
	let gridDivs = document.querySelectorAll('div div');

	for (let i in gridDivs) {
		let curr = gridDivs[i];

		curr.addEventListener('click', changeColor);
	}
}

// Make the grid
createGrid(10, 10);
// Make it listen
gridListen();
