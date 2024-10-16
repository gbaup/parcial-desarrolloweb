import './PetsContainer.css';
import React, {useEffect, useState} from 'react'
import {PetPreview} from "../PetPreview/PetPreview.tsx";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store/store.ts";
import {Pet} from "../../interfaces/pet.interface.ts";
import {fetchPets, setSelectedPet} from "../../store/petsSlice.ts";
import {NewPetModal} from "../PetModal/NewPetModal.tsx";


export const PetsContainer = () => {
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(fetchPets());
    }, []);
    const pets: Pet[] = useSelector((state: RootState) => state.pets.pets);
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [filterAge, setFilterAge] = useState('');

    console.log({filterAge})
    console.log({pets});
    const filteredPets = filterAge ? pets.filter(pet => pet.age === filterAge) : pets;
    console.log({filteredPets});


    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    if (isModalOpen) {
        return <NewPetModal onClose={closeModal}/>
    }

    return (
        <div className="pets-container">
            <button
                className="add-pet-button"
                onClick={openModal}
            >
                Agregar mascota
            </button>
            <select
                value={filterAge}
                onChange={(e) => setFilterAge(e.target.value)}
                className="filter-dropdown"
            >
                <option value="">Todos</option>
                <option value="Cachorro">Cachorro</option>
                <option value="Adulto">Adulto</option>
                <option value="Senior">Senior</option>
            </select>
            {filteredPets.map(pet => <PetPreview key={pet.id} {...pet} />)}
        </div>
    );
}

