import { useContext } from "react"
import { candidatoContext } from "./CandidatoContext"

export const useCandidato = () => {

    const context = useContext(candidatoContext);

    return context;
}