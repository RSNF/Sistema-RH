import api from "../services/api";


export async function RegisterCandRequest(nome, email, tel) {
    
  return await api.post("/candidatos", { nome, email, tel });
}

export async function CandByVagaRequest(vagaId) {
  const candidatos = api.get(`/candidatos/${vagaId}`);
  return candidatos;
}

export async function CandidatosRequest() {
  const vagas = api.get(`/candidatos`);
  return vagas;
}