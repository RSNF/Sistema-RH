import "./style.css";
import { Slider } from "../../components/Slider";

export const RevisarCandidato = () => {
  return (
    <div className="revisar-cand-div">
      <Slider
        label1="Colaborativo"
        label2="Independente"
        onChange={(event) => {}}
      />
      <Slider
        label1="Reservado"
        label2="Sociável"
        onChange={(event) => {}}
      />
      <Slider
        label1="Intenso"
        label2="Paciente"
        onChange={(event) => {}}
      />
      <Slider
        label1="Impulsivo"
        label2="Vigilante"
        onChange={(event) => {}}
      />
    </div>
  );
};
