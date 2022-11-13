import { createContext, useState, useEffect } from "react";
import {
    createCandidatoRequest
} from "./CandidatoController";

export const candidatoContext = createContext({});

export function CandidatoProvider({ children }) {

    const [candidato, setCandidato] = useState(null);

    async function createCandidato({ name, email, password }) {
        const response = await createCandidatoRequest(name, email, password);
        return response;
    }
}