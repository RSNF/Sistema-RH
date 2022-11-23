import api from "../services/api";


export async function CreateVagaRequest(titulo, descricao, objetivos, email) {

  const user =  await api.get("check").then(response => {
      return response.data;
  })

  await api.post(`/vagas/${user.id}`, { titulo, descricao, objetivos, email })
}

export async function GetVagasRequest(take) {
  const vagas = await api.get(`/vagas/${take ?? null}`)

  return vagas;
}