import './PetModal.css';
import React, {useState} from 'react'
import {useSelector} from "react-redux";
import {RootState} from "../../store/store.ts";
import {PetModalProps} from "../../interfaces/petModal.props.ts";
import {apiDeletePet} from "../../api/routes.ts";
import {useNavigate} from 'react-router-dom';


export const PetModal: React.FC<PetModalProps> = ({onClose}) => {
    const navigate = useNavigate();
    const pet = useSelector((state: RootState) => state.pets.selectedPet);
    if (!pet) {
        return null;
    }
    const adoptar = () => {
        apiDeletePet(pet);
        onClose();
    }

    const editar = () => {
        navigate('/edit-pet/');
    }
    const {name, age, photo, description, type, characteristics} = pet;

    return (
        <div className="modal">
            <div className="modal-content">
                <img src={photo} alt={name} className="profile-pic"/>
                <div className="card-title">
                    <h2>{name}</h2>
                    <p>{age}</p>
                    <p>{type}</p>
                    <p>{description}</p>
                    <p>{characteristics}</p>
                </div>
                <button className="modal-button"
                        onClick={adoptar}
                >Adoptar
                </button>
                <button className="modal-button"
                        onClick={editar}
                >Editar
                </button>
                <button className="modal-button"
                        onClick={onClose}
                >Cerrar
                </button>
            </div>
        </div>
    );
}

