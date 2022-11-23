import "./style.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FiChevronRight } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Slider } from "../../components/Slider";

// const schema = yup
//   .object({
//     titulo: yup.number(),
//     descricao: yup.string().required("Insira um descrição para a vaga."),
//   })
//   .required();

export const ObjetivosVaga = ({ stepData, setStepData, setContent }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function handleSendData(data) {
    console.log(data);
    setStepData(data)
    setContent('Adicionar candidatos')
  }

  return (
    <div className="objetivos-main-div">
      <h2 id="">Qual seu perfil comportamental?</h2>
      <div className="objetivos-div">
        <Slider
          label1="Colaborativo"
          label2="Independente"
          defaultValue={stepData && stepData.slider1}
          name="slider1"
          register={register("slider1")}
        />

        <Slider
          label1="Reservado"
          label2="Sociável"
          defaultValue={stepData && stepData.slider2}
          name="slider2"
          register={register("slider2")}
        />

        <Slider
          label1="Intenso"
          label2="Paciente"
          defaultValue={stepData && stepData.slider3}
          name="slider3"
          register={register("slider3")}
        />

        <Slider
          label1="Impulsivo"
          label2="Vigilante"
          defaultValue={stepData && stepData.slider4}
          name="slider4"
          register={register("slider4")}
        />
      </div>

      <div id="div-btn">
        <button onClick={() => {}}>Cancelar</button>

        <button onClick={handleSubmit(handleSendData)} id="create-button">
          {" "}
          <FiChevronRight /> Próxima etapa
        </button>
      </div>
    </div>
  );
};
