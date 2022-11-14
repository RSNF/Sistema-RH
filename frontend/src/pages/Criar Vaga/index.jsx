import "./style.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FiChevronRight } from "react-icons/fi";
import { Input } from "../../components/Input";

const schema = yup
  .object({
    titulo: yup.string().required("O título é obrigatório!"),
    descricao: yup.string().required("Insira um descrição para a vaga."),
  })
  .required();

export const CriarVaga = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <div className="main-div-criar-vaga">
      <h2 id="">Qual a vaga gostaria de criar?</h2>

      <label htmlFor="titulo">Título da Vaga</label>
      <Input
        register={register("titulo")}
        type="text"
        name="titulo"
        placeholder="Título da Vaga"
        autofocus={true}
        maxLength={30}
        inputError={errors?.titulo?.message}
      />

      <label htmlFor="descricao">Descrição da vaga</label>
      <textarea
        {...register("descricao")}
        name="descricao"
        cols="20"
        rows="8"
        maxLength={1000}
        placeholder="Descrição da vaga"
      />
      {<span id="input-error">{errors?.descricao?.message}</span> ?? null}

      <div id="div-btn">
        <button onClick={() => reset()}>Cancelar</button>

        <button type="submit" id="create-button" onClick={handleSubmit()}>
          {" "}
          <FiChevronRight /> Próxima etapa
        </button>
      </div>
    </div>
  );
};
