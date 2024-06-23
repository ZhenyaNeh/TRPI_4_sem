import { boxSize, findEmptyCell, generateSudoku, gridSize, NestedArray } from "./generateSudokuGrid";

export type DublicateCords = Array<{row: number, column: number}>

export class Sudoku {
    grid: NestedArray;

    constructor(){
        this.grid = generateSudoku();
    }

    getDublicatePositions(row: number, column: number, value: number): DublicateCords{
        const dublicatePositionsInColumn: DublicateCords = this.getDublicatePositionsInColumn(row, column, value);
        const dublicatePositionsInRow: DublicateCords = this.getDublicatePositionsInRow(row, column, value);
        const dublicatePositionsInBox: DublicateCords = this.getDublicatePositionsInBox(row, column, value);
    
        const dublicate = {...dublicatePositionsInColumn, ...dublicatePositionsInRow};
        dublicatePositionsInBox.forEach(dublicateInBox => {
            if(dublicateInBox.row !== row && dublicateInBox.column !== column)
                dublicate.push(dublicateInBox);
        })

        return dublicate;
    }

    getDublicatePositionsInColumn(row: number, column: number, value: number): DublicateCords {
        const dublicate = [];
        for(let i = 0; i < gridSize; i++) {
            if(this.grid[i][column] === value && i !== row)
              dublicate.push({row: i, column})
          }
        
          return dublicate;
    }

    getDublicatePositionsInRow(row: number, column: number, value: number): DublicateCords {
        const dublicate = [];
        for(let i = 0; i < gridSize; i++) {
          if(this.grid[row][i] === value && i !== column)
            dublicate.push({row, column: i})
        }
      
        return dublicate;
    }

    getDublicatePositionsInBox(row: number, column: number, value: number): DublicateCords{
        const dublicate = [];
        const firstRowInBox = row - row % boxSize;
        const firstColumnInBox = column - column % boxSize;
      
        for(let i = firstRowInBox; i < firstRowInBox + boxSize; i++) {
          for(let j = firstColumnInBox; j < firstColumnInBox + boxSize; j++){
            if(this.grid[i][j] === value && (i !== row || j !== column))
                dublicate.push({row: i, column: j})
          }
        }
      
        return dublicate;
    }

    hasEmptyCells(){
        return findEmptyCell(this.grid);
    }

}


