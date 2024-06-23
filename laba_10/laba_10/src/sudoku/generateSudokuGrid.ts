export const gridSize: number = 9
export const boxSize: number = 3

export type NestedArray = Array<Array<number | null>>
export type Cords = null | {row: number, column: number}

export function generateSudoku(): NestedArray {
  const sudoku: NestedArray = createEmptyGrid();
  resolveSudoku(sudoku);
  return sudoku;
  //return removeCells(sudoku);
}

function createEmptyGrid(): NestedArray {
  return new Array(gridSize).fill(null).map(() => new Array(gridSize).fill(null));
}

function resolveSudoku(grid: NestedArray) {
  const emptyCell: Cords = findEmptyCell(grid);
  if (!emptyCell)
    return true;

  const numbers: number[] = getRandomNumbers();

  for (let i = 0; i < numbers.length; i++) {
    if(!validate(grid, emptyCell.row, emptyCell.column, numbers[i]))
      continue;

    grid[emptyCell.row][emptyCell.column] = numbers[i];

    if(resolveSudoku(grid)) 
      return true;

    grid[emptyCell.row][emptyCell.column] = null;
  }
}

export function findEmptyCell(grid: NestedArray): Cords {
  for (let row = 0; row < gridSize; row++) {
    for (let column = 0; column < gridSize; column++) {
      if (grid[row][column] === null)
        return {row, column};
    }
  }
  return null;
}

function getRandomNumbers(): number[] {
  const numberArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (let i = numberArray.length - 1; i >= 0; i--) {
    const rundomIndex: number = Math.floor(Math.random() * (i + 1));
    swap(numberArray, i, rundomIndex);
  }

  return numberArray;
}

function swap<T>(arr: T[], index1: number, index2: number): void {
  if (index1 < 0 || index1 > arr.length || index2 < 0 || index2 > arr.length)
    throw new Error('Index Out Of Range')

  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function validate (grid: NestedArray, row: number, column: number, value: number): boolean{
  return validateRow(grid, row, column, value) &&
         validateColumn(grid, row, column, value) &&
         validateBox(grid, row, column, value);
}

function validateColumn(grid: NestedArray, row: number, column: number, value: number): boolean{
  for(let i = 0; i < gridSize; i++) {
    if(grid[i][column] === value && i !== row)
      return false;
  }

  return true;
}

function validateRow(grid: NestedArray, row: number, column: number, value: number): boolean{
  for(let i = 0; i < gridSize; i++) {
    if(grid[row][i] === value && i !== column)
      return false;
  }

  return true;
}

function validateBox(grid: NestedArray, row: number, column: number, value: number): boolean{
  const firstRowInBox = row - row % boxSize;
  const firstColumnInBox = column - column % boxSize;

  for(let i = firstRowInBox; i < firstRowInBox + boxSize; i++) {
    for(let j = firstColumnInBox; j < firstColumnInBox + boxSize; j++){
      if(grid[i][j] === value && i !== row && j !== column)
        return false;
    }
  }

  return true;
}

export function removeCells(grid: NestedArray){
    const difficulty: number = 30;
    const cloneGrid = [...grid].map(row => [...row]);
    let i = 0;

    while(i < difficulty) {
        const row = Math.floor(Math.random() * gridSize);
        const column = Math.floor(Math.random() * gridSize);

        if(cloneGrid[row][column] !== null) {
            cloneGrid[row][column] = null;
                i++;
        }
    }

    return cloneGrid;
}