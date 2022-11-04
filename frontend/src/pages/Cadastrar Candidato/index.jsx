import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { Input } from "../../components/Input/index";
import { useAuth } from "../../contexts/useAuth";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const schema = yup.object({
    name: yup.string().required('O nome é obrigatório!'),
    email: yup.string().email('Deve ser um email. Ex: email@example.com').required('o email é obrigatório!'),
    phone: yup.string().required('O número de telefone é obrigatório!').min(10).max(12).matches(phoneRegExp, 'Este número de telefone não é válido!')
  }).required();

export const CadastrarCandidato = () => {
const { register, handleSubmit, formState:{ errors } } = useForm({resolver: yupResolver(schema)});
  const auth = useAuth();
  const navigate = useNavigate();

  async function handleRegisterCand(data) {
    try {
      
    } catch (error) {
      alert(error?.request.statusText)
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
          type="phone"
          name="phone"
          placeholder="Telefone"
          register={register("phone")}
          inputError={errors?.phone?.message}
        />

        <div>
          <button
            onClick={() => {
              navigate("/login");
            }}
          >
            Cancelar
          </button>

          <button type="submit" id="create-button">
            {" "}
            &#x2714; Salvar
          </button>
        </div>
      </form>
    </div>
  );
};
