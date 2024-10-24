// todo: servicio para encapsular la interacción con la API de propiedades
import { API_URLS } from "../utils/apiConfig";

const API_URL = "https://api.example.com/properties";

export const propertyService = {
    getProperties,
    getPropertyById,
    createProperty,
    updateProperty,
    deleteProperty,
};

async function getProperties() {
    // todo
    try {
        const response = await fetch(API_URLS.PROPERTIES);
        if (!response.ok) {
          throw new Error("Error al obtener propiedades");
        }
        return await response.json();
      } catch (error) {
        console.error("Error en getProperties:", error);
        throw error;
      }
};

async function getPropertyById(id) {
    // todo
};

async function createProperty(property) {
    // todo
};

async function updateProperty(id, property) {
    // todo
};

async function deleteProperty(id) {
    // todo
};