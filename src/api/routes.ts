import {Pet} from "../interfaces/pet.interface.ts";

const URL = 'http://localhost:3005/api'

export async function apiGetPets(): Promise<Pet[]> {
    try {
        const response = await fetch(URL + "/pets", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (!response.ok) {
            throw new Error('Error en la solicitud GET');
        }
        const data = await response.json();
        return data;
    } catch
        (error) {
        console.error('Hubo un problema con la solicitud:', error);
    }
}

export async function apiGetPet(id: string): Promise<Pet> {
    try {
        const response = await fetch(URL + "/pets/" + id, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (!response.ok) {
            throw new Error('Error en la solicitud GET');
        }
        const data = await response.json();
        return data;
    } catch
        (error) {
        console.error('Hubo un problema con la solicitud:', error);
    }
}


export async function apiCreatePet(pet: Pet) {
    try {
        console.log("Creating task");
        const response = await fetch(URL + "/pets", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: pet.name,
                age: pet.age,
                type: pet.type,
                description: pet.description,
                characteristics: pet.characteristics,
                photo: pet.photo
            })
        });

        console.log({response})

        if (!response.ok) {
            throw new Error('Error al crear la tarea');
        }

        const data = await response.json();
        console.log({data})
        return data;
    } catch (error) {
        console.error('Hubo un problema con la solicitud:', error);
    }
}

export async function apiUpdatePet(pet: Pet) {
    try {
        const response = await fetch(URL + "/pets/" + pet.id, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: pet.id,
                name: pet.name,
                age: pet.age,
                type: pet.type,
                description: pet.description,
                characteristics: pet.characteristics,
                photo: pet.photo
            })
        });

        if (!response.ok) {
            throw new Error('Error al actualizar la tarea');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Hubo un problema con la solicitud:', error);
    }
}


export async function apiDeletePet(pet: Pet) {
    try {
        await fetch(URL + "/pets/" + pet.id, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        });
    } catch (error) {
        console.error('Hubo un problema con la solicitud:', error);
    }
}
