import "./style.css";
import { useForm } from "react-hook-form";
import { useAuth } from "../../contexts/useAuth";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Input } from "../../components/Input";
import { Tabela } from "../../components/Tabela";
import { FiLink, FiMail, FiCheck } from "react-icons/fi";

export const AdicionarCandidatos = ({
  firstStepData,
  secoundStepData,
  setContent,
}) => {
  const auth = useAuth();
  const [candidatos, setCandidatos] = useState([]);
  const { register, handleSubmit } = useForm();

  async function handleCreateVaga(data) {
    try {
      var cand = [];
      for (const key in data) {

        if (data[key]) {
          const value = candidatos.find(candidato => candidato.id === key)
          cand.push(value.email);
        }
      }
      console.log(cand)
      await auth.createVaga({
        titulo: firstStepData.titulo,
        descricao: firstStepData.descricao,
        objetivos: secoundStepData, 
        email: cand
      })
      notify()
      setContent('Overview')
    } catch (error) {
      console.log(error)
    }
  }

  const notify = () =>
    toast.success("Vaga cadastrada com sucesso!!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  

  async function fetchCandidatos() {
    const arrayCand = [];
    const data = await auth.candidatos();
    data.map((candidato) =>
      arrayCand.push({
        id: candidato.id,
        nome: candidato.nome,
        email: candidato.email,
      })
    );
    setCandidatos(arrayCand);
  }

  useEffect(() => {
    fetchCandidatos();
  }, []);

  return (
    <div className="main-div-add-cand">
      <h2 className="section-title"> Adicionar candiatos </h2>

      <p id="">
        {" "}
        Enviar formulário para os candidatos para a vaga de{" "}
        <span>Designer</span>{" "}
      </p>

      <div className="div-enviar-form">
        <button onClick={() => {}}>
          {" "}
          <FiLink /> Criar um link{" "}
        </button>
        <button onClick={() => {}}>
          {" "}
          <FiMail /> Criar email{" "}
        </button>
      </div>

      <label htmlFor="emails"> Digite os emails separados por vírgula </label>
      <Input name="emails" />

      <h2 className="section-title"> Candidatos </h2>

      <Tabela data={candidatos} checkBox={true} formRegister={register} />

      <div id="div-btn">
        <button onClick={() => {}}>Cancelar</button>

        <button id="create-button" onClick={handleSubmit(handleCreateVaga)}>
          {" "}
          <FiCheck /> Finalizar
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};
