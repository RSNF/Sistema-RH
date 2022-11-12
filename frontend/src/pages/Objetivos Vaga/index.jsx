import "./style.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FiChevronRight } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Slider } from "../../components/Slider";

const schema = yup
  .object({
    titulo: yup.string().required("O título é obrigatório!"),
    descricao: yup.string().required("Insira um descrição para a vaga."),
  })
  .required();

export const ObjetivosVaga = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <div className="objetivos-main-div">
      <h2 id="">Qual seu perfil comportamental?</h2>
      <div className="objetivos-div">
        <Slider
          label1="Colaborativo"
          label2="Independente"
          onChange={(event) => {}}
        />

        <Slider label1="Reservado" label2="Sociável" onChange={(event) => {}} />

        <Slider label1="Intenso" label2="Paciente" onChange={(event) => {}} />

        <Slider
          label1="Impulsivo"
          label2="Vigilante"
          onChange={(event) => {}}
        />
      </div>

      <div id="div-btn">
        <button onClick={handleSubmit()}>Cancelar</button>

        <button type="submit" id="create-button">
          {" "}
          <FiChevronRight /> Próxima etapa
        </button>
      </div>
    </div>
  );
};
