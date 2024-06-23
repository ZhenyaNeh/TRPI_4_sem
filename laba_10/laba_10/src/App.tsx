import { useState } from 'react';
import './App.css';
import { boxSize, gridSize } from './sudoku/generateSudokuGrid';
import { DublicateCords, Sudoku } from './sudoku/sudokuGame';
import { useHotkeys } from 'react-hotkeys-hook';

type Cell = number | '' | null;
export type Cords = {row: number, column: number}
let winGame: boolean = false;
const sudoku = new Sudoku();
const startFilled: boolean[][] = Array.from({ length: 9 }, () => Array(9).fill(false));

startFilledCells();

function startFilledCells(): void {
  for (let i = 0; i < gridSize; i++)
    for (let j = 0; j < gridSize; j++)
      if (sudoku.grid[i][j] !== null)
        startFilled[i][j] = true;
}

function convertPositionToIndex(row: number, column: number): number {
  return row * gridSize + column;
}

function convertIndexToPosition(index: number): Cords {
  return{
    row: Math.floor(index / gridSize),
    column: index % gridSize
  }
}

function App() {
  const [grid, setGrid] = useState<Cell[][]>(sudoku.grid);
  const [disabled, setdisabled] = useState<boolean>(false);

  const handleChange = (row: number, col: number, value: Cell) => {
    const newGrid = [...grid];
    newGrid[row][col] = value;
    setGrid(newGrid);
    //sudoku.grid[row][col] = value as number;
  };

  const highlightRow = (row: number, column: number) => {
    const inputs = document.querySelectorAll('input');

    for (let i = row * gridSize; i < row * gridSize + gridSize; i++)
      inputs[i].classList.add('error')
  }

  const highlightColumn = (row: number, column: number) => {
    const inputs = document.querySelectorAll('input');

    for (let i = column; i < gridSize * gridSize; i += gridSize)
      inputs[i].classList.add('error')
  }

  const highlightBox = (row: number, column: number) => {
    const inputs = document.querySelectorAll('input');
    const firstRowInBox = row - row % boxSize;
    const firstColumnInBox = column - column % boxSize;

    for (let i = firstRowInBox; i < firstRowInBox + boxSize; i++) {
      for (let j = firstColumnInBox; j < firstColumnInBox + boxSize; j++) {
        inputs[convertPositionToIndex(i, j)].classList.add('error')
      }
    }
  }

  const highlightError = () => {
    winGame = true;
    for (let row = 0; row < gridSize; row++) {
      for (let column = 0; column < gridSize; column++) {
        if (!startFilled[row][column] && sudoku.grid[row][column] !== null) {
          const dublicateInRow: DublicateCords = sudoku.getDublicatePositionsInRow(row, column, sudoku.grid[row][column] as number);
          const dublicateInColumn: DublicateCords = sudoku.getDublicatePositionsInColumn(row, column, sudoku.grid[row][column] as number);
          const dublicateInBox: DublicateCords = sudoku.getDublicatePositionsInBox(row, column, sudoku.grid[row][column] as number);

          if(dublicateInRow.length !== 0 || dublicateInColumn.length !== 0 || dublicateInBox.length !== 0) {
            //setWinGame(false);
            winGame = false;
            dublicateInRow.forEach(el =>
              highlightRow(el.row, el.column)
            );

            dublicateInColumn.forEach(el =>
              highlightColumn(el.row, el.column)
            );

            dublicateInBox.forEach(el =>
              highlightBox(el.row, el.column)
            );
          }
        }
      }
    }
  }

  const handleCheck = () => {
    //setWinGame(true);
    highlightError();
    const inputs = document.querySelectorAll('input');

    inputs.forEach(el => {
      if (el.value === ''){
        winGame = false;
        return;
      }
    })

    if (sudoku.hasEmptyCells() !== null) {
      //setWinGame(false);
      winGame = false;
      inputs.forEach(el => {
        if (el.classList.contains('error'))
          return;
      })

      inputs.forEach(el => {
        if (!el.classList.contains('filled') && el.value === '')
          el.classList.add('error');
      })
    }
    if(winGame){
      setdisabled(winGame);
      inputs.forEach(el => {
        el.className = 'cell win';//.add('win');
      })
    }
  };

  const handleCheckInRealTime = () => {
    //setWinGame(true);
    highlightError();
    const inputs = document.querySelectorAll('input');

    inputs.forEach(el => {
      if (el.value === ''){
        winGame = false;
        return;
      }
    })

    if (sudoku.hasEmptyCells() !== null) {
      //setWinGame(false);
      winGame = false;
      inputs.forEach(el => {
        if (el.classList.contains('error'))
          return;
      })

    }
    if(winGame){
      setdisabled(winGame);
      inputs.forEach(el => {
        el.className = 'cell win';//.add('win');
      })
    }
  };

  // const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
  //   const inputs = document.querySelectorAll('input');

  //   inputs.forEach((input: HTMLInputElement) => {
  //     input.classList.remove('selected');
  //   });

  //   const target = event.target as HTMLInputElement;
  //   target.classList.add('selected');
  // };

  const resetSelected = () => {
    const inputs = document.querySelectorAll('input');

    inputs.forEach((input: HTMLInputElement) => {
      input.classList.remove('selected');
      input.classList.remove('error');
    });
  };

  const handleInputFocusStartFilledCells = (event: React.FocusEvent<HTMLInputElement> | React.ChangeEvent<HTMLInputElement>, number: number | null) => {
    resetSelected();
    const target = event.target as HTMLInputElement;
    target.classList.add('selected');

    const inputs = document.querySelectorAll('input');

    inputs.forEach((input: HTMLInputElement) => {
      const val = parseInt(input.value, 10);
      if (val === number)
        input.classList.add('selected');
    });
  };

  const handleInputFocusCells = (event: React.FocusEvent<HTMLInputElement>) => {
    resetSelected();
    const target = event.target as HTMLInputElement;
    target.classList.add('selected');
  };

  // const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
  //   const target = event.target as HTMLInputElement;
  //   target.classList.remove('selected');
  // };

  const gridSudoku: JSX.Element[][] =
    sudoku.grid.map((row, rowIndex) => (
      row.map((cell, colIndex) => (
        <input
          key={gridSize * rowIndex + colIndex}
          //className={cell !== null ? 'cell filled' : 'cell'}
          className={startFilled[rowIndex][colIndex] ? 'cell filled' : 'cell'}
          readOnly={startFilled[rowIndex][colIndex]}
          maxLength={1}
          value={cell === null ? '' : cell}
          //onClick={handleClick}
          //onFocus={handleInputFocus}
          onFocus={(e) => {
            if (startFilled[rowIndex][colIndex]) {
              handleInputFocusStartFilledCells(e, cell);
              return;
            }
            else if(!startFilled[rowIndex][colIndex] && cell  !== null){
              handleInputFocusStartFilledCells(e, cell);
              return;
            }
            handleInputFocusCells(e);
          }}
          onBlur={resetSelected}
          onChange={(e) => {
            const value: string = e.target.value;
            const num = value !== '' && !isNaN(Number(value)) ? parseInt(value, 10) : '';
            if (num !== 0) {
              handleChange(rowIndex, colIndex, num);
              if (num !== '') {
                e.target.classList.add('insert');// = 'cell insert';
                handleInputFocusStartFilledCells(e, num);
                handleCheckInRealTime();
                return
              }
              e.target.classList.remove('insert');// = 'cell';
              handleCheckInRealTime();
            }
          }}
        />
      ))
    ));

  const handleReloadPage = () => {
    resetSelected();
    window.location.reload();
  };

  const getOneHint = () => {
    resetSelected();
    const inputs = document.querySelectorAll('input');
    
    for(let i = 0; i < gridSize*gridSize; i++){
      if(inputs[i].value === ''){
        const cords: Cords = convertIndexToPosition(i); 
        inputs[i].value = sudoku.answerGrid[cords.row][cords.column]?.toString() || '';

        handleChange(cords.row, cords.column, sudoku.answerGrid[cords.row][cords.column]);
        inputs[i].classList.add('selected');
        return;
      }
    }
  }

  useHotkeys('ctrl+shift+r', handleReloadPage);
  useHotkeys('ctrl+shift+h', getOneHint);

  return (
    <div className="App">
      <div className="grid">
        {gridSudoku}
      </div>
      <div className='ControlButton'>
        <div className='Button Left'>
          <button onClick={handleCheck} disabled={disabled}>Verification</button>
        </div>
        <div className='Button Right'>
          <button onClick={handleReloadPage}>Reload</button>
        </div>
      </div>
    </div>
  );
}

export default App;
