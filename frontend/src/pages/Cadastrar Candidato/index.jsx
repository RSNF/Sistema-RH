import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";
import { Input } from "../../components/Input/index";
import { useAuth } from "../../contexts/useAuth";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const schema = yup
  .object({
    name: yup.string().required("O nome é obrigatório!"),
    email: yup
      .string()
      .email("Deve ser um email. Ex: email@example.com")
      .required("O email é obrigatório!"),
    tel: yup
      .string()
      .required("O número de telefone é obrigatório!")
      .min(10, "O número de telefone deve ter pelo menos 10 números.")
      .max(11, "O telefone deve ter no máximo 11 números.")
      .matches(phoneRegExp, "Este número de telefone não é válido!"),
  })
  .required();

export const CadastrarCandidato = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const notify = () =>
    toast.success("Candidato cadastrado com sucesso!!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const auth = useAuth();

  async function handleRegisterCand(data) {
    try {
      await auth.registerCand(data);
      notify();
      reset();
    } catch (error) {
      alert(error?.request.statusText);
      console.log(error?.request.statusText);
    }
  }

  return (
    <div className="register-cand">
      <form action="" onSubmit={handleSubmit(handleRegisterCand)}>
        <label htmlFor="name">Nome</label>
        <Input
          type="text"
          name="name"
          placeholder="Nome"
          autofocus={true}
          register={register("name")}
          inputError={errors?.name?.message}
        />

        <label htmlFor="email">Email</label>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          register={register("email")}
          inputError={errors?.email?.message}
        />

        <label htmlFor="password">Telefone</label>
        <Input
          type="tel"
          name="tel"
          placeholder="Telefone"
          register={register("tel")}
          inputError={errors?.tel?.message}
        />

        <div>
          <button onClick={() => reset()}>Cancelar</button>

          <button type="submit" id="create-button">
            {" "}
            &#x2714; Salvar
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};
