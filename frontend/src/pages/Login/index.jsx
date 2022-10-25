import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import "./style.css";
import { Input } from "../../components/Input/index";
import { Logo, /*Facebook, Twitter, Google*/ } from "../../components/Svg";
import { Link } from "../../components/Link/index";
import { useAuth } from "../../contexts/useAuth";

const schema = yup.object({
  email: yup.string().email('Deve ser um email. Ex: email@example.com').required('o email é obrigatório!'),
  password: yup.string().required('A senha é obrigatória!').min(6, 'A senha deve ter no mínimo 6 caracteres.')
}).required();

export const Login = () => {
  const { register, handleSubmit, formState:{ errors } } = useForm({resolver: yupResolver(schema)});
  const auth = useAuth();
  const navigate = useNavigate();

  async function handleSingIn(data) {
    try {
      await auth.signIn(data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="login-main-div">
      <div id="logo-div">
        <h1>Sistema RH</h1>
        <Logo />
      </div>

      <div id="login-div">
        <h1>Login</h1>

        <form action="" onSubmit={handleSubmit(handleSingIn)}>
          <span>
            <label htmlFor="name">Email</label>
            <Input
              register={register("email")}
              type="email"
              name="email"
              placeholder="Email"
              autofocus="true"
              inputError={errors?.email?.message}
            />
          </span>

          <span>
            <label htmlFor="name">Senha</label>
            <Input
              register={register("password")}
              type="password"
              name="password"
              placeholder="Senha"
              inputError={errors?.password?.message}
            />
          </span>

          <div>
            <div>
              <Input
                type="checkbox"
                name="checkbox"
                register={register("checkbox")}
              />
              <label htmlFor="checkbox">Mantenha-me conectado</label>
            </div>

            <Link text="Esqueci a senha" />
          </div>

          <Input type="submit" name="submit-btn" />
        </form>

        {/* <div id="ou-line">
          <hr />
          <p>ou</p>
          <hr />
        </div>

        <div id="social-signin">
          <a href="#">
            <Facebook />
          </a>
          <a href="#">
            <Twitter />
          </a>
          <a href="#">
            <Google />
          </a>
        </div> */}

        <a href={'/criar-conta'}
          id="create"
        >
          Criar conta
        </a>
      </div>
    </div>
  );
};
