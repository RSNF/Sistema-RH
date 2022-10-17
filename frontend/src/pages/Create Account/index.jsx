import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { Input } from "../../components/Input/index";
import { Logo } from "../../components/Svg";
import { useAuth } from "../../contexts/useAuth";

export const CreateAccount = () => {
  const { register, handleSubmit } = useForm();
  const auth = useAuth();
  const navigate = useNavigate();

  async function handleCreateUser(data) {
    try {
      console.log(data);
      await auth.createUser(data);
      // navigate('/')
      // navigate(0)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="create-main-div">
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
            autofocus="true"
            register={register("name")}
          />
          <label htmlFor="email">Email</label>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            register={register("email")}
          />
          <label htmlFor="password">Senha</label>
          <Input
            type="password"
            name="password"
            placeholder="Senha"
            register={register("password")}
          />

          <div>
            <button>Cancelar</button>
            <button type="submit" id="create-button">
              {" "}
              &#x2714; Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
