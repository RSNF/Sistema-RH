import "./style.css";
import { Slider } from "../../components/Slider";
import { FiCheck } from "react-icons/fi";

export const VisualizarCandidatos = () => {
  return (
    <div className="revisar-cand-main">
      <h2>Vaga: Designer</h2>
      <div className="revisar-cand-name">
        <p>Nome: Jane Cooper</p>
        <p>Email: Jane@email.com</p>
        <p>Tel:(73) 98113-9007</p>
      </div>
      <span id="cand-span">Perfil comportamental</span>
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

      <div id="div-btn">
        <button onClick={""}>Cancelar</button>

        <button type="submit" id="create-button">
          {" "}
          <FiCheck /> Editar
        </button>
      </div>
    </div>
  );
};
