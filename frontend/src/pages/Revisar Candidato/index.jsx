import "./style.css";
import { Slider } from "../../components/Slider";
import { Tabela } from "../../components/Tabela";

export const RevisarCandidato = () => {
  const data = [
    {nome: 'Patrick Mota', email: 'patrick@email.com', status: 'Feito', afinidade: 8, nota: 9},
    {nome: 'Raimundo Santana', email: 'raimundo@email.com', status: 'Pendente', afinidade: 8.5, nota: 8},
    {nome: 'Natanias Souza', email: 'natan@email.com', status: 'Feito', afinidade: 7, nota: 8}
  ]

  return (
    <div className="revisar-cand-main">
      <h2>Vaga: Designer</h2>
      <span id="cand-span">Candidato: Beltrano da Silva</span>
      <div className="revisar-cand-div">
        <Slider
          label1="Colaborativo"
          label2="Independente"
          onChange={(event) => {}}
          disabled={true}
          vagaSlider={true}
          defaultValue={3.6}
          defaultValueVaga={1.5}
        />

        <Slider
          label1="Reservado"
          label2="Sociável"
          onChange={(event) => {}}
          disabled={true}
          vagaSlider={true}
          defaultValue={0.5}
          defaultValueVaga={1.0}
        />

        <Slider
          label1="Intenso"
          label2="Paciente"
          onChange={(event) => {}}
          disabled={true}
          vagaSlider={true}
          defaultValue={3.9}
          defaultValueVaga={2.5}
        />

        <Slider
          label1="Impulsivo"
          label2="Vigilante"
          onChange={(event) => {}}
          disabled={true}
          vagaSlider={true}
          defaultValue={2.6}
          defaultValueVaga={2.5}
        />
      </div>

      <h2>Candidatos</h2>
      <Tabela data={data} />
    </div>
  );
};
