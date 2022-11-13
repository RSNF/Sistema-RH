import api from "../../services/api";

export async function createCandidatoRequest(nome, email, tel) {

    return await api.post("candidatos", { nome, email, tel });
}