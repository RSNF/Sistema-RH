import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { Input } from "../../components/Input/index";
import { Logo } from "../../components/Svg";
import { useAuth } from "../../contexts/useAuth";
import { Footer } from "../../components/Footer";

const schema = yup.object({
  name: yup.string().required('O nome é obrigatório!'),
  email: yup.string().email('Deve ser um email. Ex: email@example.com').required('o email é obrigatório!'),
  password: yup.string().required('A senha é obrigatória!').min(6, 'A senha deve ter no mínimo 6 caracteres.')
}).required();

export const CreateAccount = () => {
  const { register, handleSubmit, formState:{ errors } } = useForm({resolver: yupResolver(schema)});
  const auth = useAuth();
  const navigate = useNavigate();

  async function handleCreateUser(data) {
    try {
      await auth.createUser(data);
      navigate('/')
      navigate(0)
    } catch (error) {
      alert(error?.request.statusText)
      console.log(error?.request.statusText);
    }
  }

  return (
    <><div className="create-main-div">
      <div id="logo-div">
        <h1>Sistema RH</h1>
        <Logo />
      </div>

      <div id="create-div">
        <h1>Criar Conta</h1>

        <form action="" onSubmit={handleSubmit(handleCreateUser)}>
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

          <label htmlFor="password">Senha</label>
          <Input
            type="password"
            name="password"
            placeholder="Senha"
            register={register("password")}
            inputError={errors?.password?.message}
          />

          <div>
            <button onClick={() => {
              navigate('/login');
            }} >Cancelar</button>

            <button type="submit" id="create-button">
              {" "}
              &#x2714; Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
    <Footer /></>
  );
};
