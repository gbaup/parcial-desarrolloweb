import {configureStore} from '@reduxjs/toolkit';
import petsSlice from "./petsSlice.ts";


export const store = configureStore({
    reducer: {
        pets: petsSlice,
    },
});

// Definir el tipo de estado general
export type RootState = ReturnType<typeof store.getState>;

// Definir el tipo de dispatch
export type AppDispatch = typeof store.dispatch;
