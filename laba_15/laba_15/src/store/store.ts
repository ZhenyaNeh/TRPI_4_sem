import { combineReducers, configureStore } from "@reduxjs/toolkit";
import gridReduseer from './redusers/gridSlice'

const rootReduser =  combineReducers ({
    gridReduseer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReduser
    })
}

export type RootState = ReturnType<typeof rootReduser>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];