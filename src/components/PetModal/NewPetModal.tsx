import './PetModal.css';
import React, {useState} from 'react'
import {PetModalProps} from "../../interfaces/petModal.props.ts";
import {apiCreatePet} from "../../api/routes.ts";


export const NewPetModal: React.FC<PetModalProps> = ({onClose}) => {
    const [petInfo, setPetInfo] = useState({
        name: '',
        age: '',
        photo: '',
        type: '',
        description: '',
        characteristics: ''
    })
    const createPet = () => {
        apiCreatePet({
            name: petInfo.name,
            age: petInfo.age,
            type: petInfo.type,
            description: petInfo.description,
            characteristics: petInfo.characteristics,
            photo: petInfo.photo
        })
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        setPetInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <form
                    className="new-pet-form"
                >
                    <label htmlFor="name">Nombre</label>
                    <input type="text" id="name" name="name"
                           onChange={handleChange}
                           value={petInfo.name}
                    />
                    <label htmlFor="age">Edad</label>
                    <select id="age" name="age"
                            onChange={handleChange}
                            value={petInfo.age}
                    >
                        <option value="Cachorro">Cachorro</option>
                        <option value="Adulto">Adulto</option>
                        <option value="Senior">Senior</option>
                    </select>
                    <label htmlFor="photo">Foto</label>
                    <input type="text" id="photo" name="photo"
                           onChange={handleChange}
                           value={petInfo.photo}
                    />
                    <label htmlFor="type">Tipo</label>
                    <input type="text" id="type" name="type"
                           onChange={handleChange}
                           value={petInfo.type}
                    />
                    <label htmlFor="description">Descripción</label>
                    <input type="text" id="description" name="description"
                           onChange={handleChange}
                           value={petInfo.description}
                    />
                    <label htmlFor="characteristics">Características</label>
                    <input type="text" id="characteristics" name="characteristics"
                           onChange={handleChange}
                           value={petInfo.characteristics}
                    />
                </form>
                <button
                    className="modal-button create-button"
                    onClick={createPet}>Crear
                </button>
                <button className="modal-button close-button"
                        onClick={onClose}
                >Cerrar
                </button>
            </div>

        </div>
    );
}

