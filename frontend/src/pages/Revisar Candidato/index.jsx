import "./style.css";
import { useAuth } from "../../contexts/useAuth";
import { Slider } from "../../components/Slider";
import { Tabela } from "../../components/Tabela";
import { useEffect, useState } from "react";

export const RevisarCandidato = () => {
  const auth = useAuth();
  const [vagas, setVagas] = useState([]);
  const [selectedVaga, setSelectedVaga] = useState();
  const [candidatos, setCandidatos] = useState([]);

  async function fetchVagas() {
    const allVagas = await auth.getVagas()
    setVagas(allVagas.data);
  }

  async function fetchCandVagas() {
    const arrayCand = [];
    const candByVaga = await auth.candByVaga(selectedVaga ?? null);
    console.log(candByVaga)
    candByVaga.map((candidato) =>
      arrayCand.push({
        id: candidato.id,
        nome: candidato.nome,
        email: candidato.email,
        perfil: JSON.parse(candidato.perfil),
        telefone: candidato.tel,
      })
    );
    setCandidatos(arrayCand);
  }

  useEffect(() => {
    fetchVagas();
    fetchCandVagas();
  }, []);

  return (
    <div className="revisar-cand-main">
      <span className="select-vagas">
        <label htmlFor="vagas">Selecione uma Vaga:</label>
        <select
          name="vagas"
          id="vagas"
          onChange={(event) => setSelectedVaga(event.target.value)}
        >
          {vagas.map((vaga) => (
            <option value={vaga.id} key={vaga.id}>
              {vaga.titulo}
            </option>
          ))}
        </select>
      </span>

      <span id="cand-span">Candidato: {null}</span>
      <div className="revisar-cand-div">
        <Slider
          label1="Colaborativo"
          label2="Independente"
          onChange={(event) => {}}
          disabled={true}
          vagaSlider={true}
          defaultValue={3.6}
          defaultValueVaga={2}
        />

        <Slider
          label1="Reservado"
          label2="Sociável"
          onChange={(event) => {}}
          disabled={true}
          vagaSlider={true}
          defaultValue={0.5}
          defaultValueVaga={2}
        />

        <Slider
          label1="Intenso"
          label2="Paciente"
          onChange={(event) => {}}
          disabled={true}
          vagaSlider={true}
          defaultValue={3.9}
          defaultValueVaga={2}
        />

        <Slider
          label1="Impulsivo"
          label2="Vigilante"
          onChange={(event) => {}}
          disabled={true}
          vagaSlider={true}
          defaultValue={2.6}
          defaultValueVaga={2}
        />
      </div>

      <h2>Candidatos</h2>
      <Tabela data={candidatos} />
    </div>
  );
};
