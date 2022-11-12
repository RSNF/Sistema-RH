import "./style.css";
import { Slider } from "../../components/Slider";

export const RevisarCandidato = () => {
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
      <div className="tabela">
        <div id="cabecalho">
          <span id="nome">Nome</span>
          <span id="email">Email</span>
          <span id="status">Status do Questionário</span>
          <span id="afinidade">Afinidade com a vaga</span>
          <span id="nota">Nota do Questionário</span>
          <span id="entrevista">Entrevistar</span>
          <span id="visualizar">Visualizar</span>
        </div>
        <div>
          <div id="tabela-row">
            <span><input type="radio" name="" id="" /> Fulano da Silva</span>
            <span>example@email.com</span>
            <span>Feito</span>
            <span>10</span>
            <span>10</span>
            <button>Sim</button>
            <button>Visualizar</button>
          </div>
        </div>
      </div>
    </div>
  );
};
