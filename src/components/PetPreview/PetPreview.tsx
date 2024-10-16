import './PetPreview.css';
import React, {useState} from 'react'
import {Pet} from "../../interfaces/pet.interface.ts";
import {PetModal} from "../PetModal/PetModal.tsx";
import {RootState, store} from "../../store/store.ts";
import {useDispatch, useSelector} from "react-redux";
import {setSelectedPet} from "../../store/petsSlice.ts";

export const PetPreview = (pet: Pet) => {

    const [isModalOpen, setIsModalOpen] = useState(false)


    const dispatch = useDispatch();
    const openModal = () => {
        dispatch(setSelectedPet(pet));
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    if (isModalOpen) {
        return <PetModal onClose={closeModal}/>
    }

    return (
        <div className="card">
            <img src={pet.photo} alt={pet.name} className="profile-pic"/>
            <div className="card-title">
                <h2>{pet.name}</h2>
                <p>{pet.age}</p>
            </div>
            <button
                onClick={openModal}
            >Detalles
            </button>
        </div>
    );
}

