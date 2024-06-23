import { useEffect} from 'react';
import './App.css';
import { boxSize, findEmptyCell, gridSize } from './sudoku/generateSudokuGrid';
import { DublicateCords, Sudoku } from './sudoku/sudokuGame';
import { useHotkeys } from 'react-hotkeys-hook';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { gridSlice } from './store/redusers/gridSlice';

export type Cords = { row: number, column: number }
let winGame: boolean = false;
export const sudoku = new Sudoku();

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
  return {
    row: Math.floor(index / gridSize),
    column: index % gridSize
  }
}

function App() {
  const { grid, disable } = useAppSelector(state => state.gridReduseer);
  const { fillStartGrid, changeGrid, setDisabled } = gridSlice.actions;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fillStartGrid(sudoku.grid));
    // eslint-disable-next-line
  }, []);

  function getDublicatePositionsInColumn(row: number, column: number, value: number): DublicateCords {
    const dublicate = [];
    for (let i = 0; i < gridSize; i++) {
      if (grid[i][column] === value && i !== row)
        dublicate.push({ row: i, column })
    }

    return dublicate;
  }

  function getDublicatePositionsInRow(row: number, column: number, value: number): DublicateCords {
    const dublicate = [];
    for (let i = 0; i < gridSize; i++) {
      if (grid[row][i] === value && i !== column)
        dublicate.push({ row, column: i })
    }

    return dublicate;
  }

  function getDublicatePositionsInBox(row: number, column: number, value: number): DublicateCords {
    const dublicate = [];
    const firstRowInBox = row - row % boxSize;
    const firstColumnInBox = column - column % boxSize;

    for (let i = firstRowInBox; i < firstRowInBox + boxSize; i++) {
      for (let j = firstColumnInBox; j < firstColumnInBox + boxSize; j++) {
        if (grid[i][j] === value)
          if (i !== row || j !== column)
            dublicate.push({ row: i, column: j })
      }
    }

    return dublicate;
  }

  function hasEmptyCells() {
    return findEmptyCell(grid);
  }

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
        if (!startFilled[row][column] && grid[row][column] !== null) {
          const dublicateInRow: DublicateCords = getDublicatePositionsInRow(row, column, grid[row][column] as number);
          const dublicateInColumn: DublicateCords = getDublicatePositionsInColumn(row, column, grid[row][column] as number);
          const dublicateInBox: DublicateCords = getDublicatePositionsInBox(row, column, grid[row][column] as number);

          if (dublicateInRow.length !== 0 || dublicateInColumn.length !== 0 || dublicateInBox.length !== 0) {
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
    resetSelected();
    highlightError();
    const inputs = document.querySelectorAll('input');

    inputs.forEach(el => {
      if (el.value === '') {
        winGame = false;
        return;
      }
    })

    if (hasEmptyCells() !== null) {
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
    if (winGame) {
      dispatch(setDisabled(winGame));
      inputs.forEach(el => {
        el.className = 'cell win';
      })
    }
  };

  const handleCheckInRealTime = () => {
    resetSelected();
    highlightError();
    const inputs = document.querySelectorAll('input');

    inputs.forEach(el => {
      if (el.value === '') {
        winGame = false;
        return;
      }
    })

    if (hasEmptyCells() !== null) {
      winGame = false;
      inputs.forEach(el => {
        if (el.classList.contains('error'))
          return;
      })

    }
    if (winGame) {
      dispatch(setDisabled(winGame));
      inputs.forEach(el => {
        el.className = 'cell win';
      })
    }
  };

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


  const gridSudoku: JSX.Element[][] =
    grid.map((row, rowIndex) => (
      row.map((cell, colIndex) => (
        <input
          key={gridSize * rowIndex + colIndex}
          className={startFilled[rowIndex][colIndex] ? 'cell filled' : 'cell'}
          readOnly={startFilled[rowIndex][colIndex]}
          maxLength={1}
          value={cell === null ? '' : cell}
          onFocus={(e) => {
            if (startFilled[rowIndex][colIndex]) {
              handleInputFocusStartFilledCells(e, cell);
              return;
            }
            else if (!startFilled[rowIndex][colIndex] && cell !== null) {
              handleInputFocusStartFilledCells(e, cell);
              return;
            }
            handleInputFocusCells(e);
          }}
          onBlur={resetSelected}
          onChange={(e) => {
            const value: string = e.target.value;
            const num = value !== '' && !isNaN(Number(value)) ? parseInt(value, 10) : null;
            if (num !== 0) {
              dispatch(changeGrid({ row: rowIndex, col: colIndex, value: num }));
              if (num !== null) {
                e.target.classList.add('insert');
                handleInputFocusStartFilledCells(e, num);
                return
              }
              e.target.classList.remove('insert');
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

    for (let i = 0; i < gridSize * gridSize; i++) {
      if (inputs[i].value === '') {
        const cords: Cords = convertIndexToPosition(i);
        inputs[i].value = sudoku.answerGrid[cords.row][cords.column]?.toString() || '';

        dispatch(changeGrid({ row: cords.row, col: cords.column, value: sudoku.answerGrid[cords.row][cords.column] }))
        inputs[i].classList.add('selected');
        return;
      }
    }
  }

  useEffect(() => {
    handleCheckInRealTime();
  });

  useHotkeys('ctrl+shift+r', handleReloadPage);
  useHotkeys('ctrl+shift+h', getOneHint);

  return (
    <div className="App">
      <div className="grid">
        {gridSudoku}
      </div>
      <div className='ControlButton'>
        <div className='Button Left'>
          <button onClick={handleCheck} disabled={disable}>Verification</button>
        </div>
        <div className='Button Right'>
          <button onClick={handleReloadPage}>Reload</button>
        </div>
      </div>
    </div>
  );
}

export default App;
