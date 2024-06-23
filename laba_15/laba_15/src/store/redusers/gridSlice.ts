import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { NestedArray, gridSize } from "../../sudoku/generateSudokuGrid";

interface TypeCount{
    grid: NestedArray,
    disable: boolean
}

const initialState: TypeCount = {
    grid: new Array(gridSize).fill(null).map(() => new Array(gridSize).fill(null)),
    disable: false
}

export const gridSlice = createSlice({
    name: 'grid',
    initialState,
    reducers: {
        fillStartGrid(state, action: PayloadAction<NestedArray>){
            state.grid = action.payload
        },
        changeGrid(state, action: PayloadAction<{ row: number, col: number, value: number | null}>){
            state.grid[action.payload.row][action.payload.col] = action.payload.value;
        },
        setDisabled(state, action: PayloadAction<boolean>){
            state.disable = action.payload;
        },
    }
})

export default gridSlice.reducer