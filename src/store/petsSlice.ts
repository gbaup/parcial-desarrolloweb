import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';

import {apiCreatePet, apiGetPets} from "../api/routes.ts";
import {Pet} from "../interfaces/pet.interface.ts";


const initialState: {
    pets: Pet[];
    selectedPet: Pet | null;
} = {
    pets: [],
    selectedPet: null,
};

export const fetchPets = createAsyncThunk('pets/fetchPets', async () => {
    const response = await apiGetPets();
    return response;
});


export const fetchAddPet = createAsyncThunk('pets/addPet', async (pet: Pet) => {
    const response = await apiCreatePet(pet);
    return response;
});


const petsSlice = createSlice({
    name: 'pets',
    initialState,
    reducers: {

        addPet: (state, action: PayloadAction<Pet>) => {
            if (state.pets) {
                state.pets.push(action.payload);
                console.log("Adding pet to store", action.payload);
            } else {
                console.error("Pet array is undefined");
            }
        },

        removePet: (state, action: PayloadAction<string>) => {
            state.pets = state.pets.filter(pet => pet.id !== action.payload);
        },

        editPet: (state, action: PayloadAction<{ newPet: Pet }>) => {
            console.log(action.payload.newPet)
            state.pets = state.pets.map(pet => {
                if (pet.id === action.payload.newPet.id) {
                    return action.payload.newPet;
                }
                return pet;
            });
        },
        setSelectedPet: (state, action: PayloadAction<Pet | null>) => {
            state.selectedPet = action.payload;
        },
    },
    extraReducers: (builder) => {

        builder.addCase(fetchPets.fulfilled, (state, action) => {
            if (Array.isArray(action.payload)) {
                state.pets = action.payload;
            } else {
                console.error('Fetch pets error: Payload is not an array', action.payload);
            }
        });

        builder.addCase(fetchAddPet.fulfilled, (state, action) => {
            state.pets.push(action.payload);
            console.log("Pet added via API", action.payload);
        });
    }
});

export const {addPet, removePet, editPet, setSelectedPet} = petsSlice.actions;
export default petsSlice.reducer;
