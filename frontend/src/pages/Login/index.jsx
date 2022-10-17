import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { Input } from "../../components/Input/index";
import { Logo, Facebook, Twitter, Google } from "../../components/Svg";
import { Link } from "../../components/Link/index";
import { useAuth } from "../../contexts/useAuth";

export const Login = () => {
  const { register, handleSubmit } = useForm();
  const auth = useAuth();
  const navigate = useNavigate();

  async function handleSingIn(data) {
    try {
      await auth.signIn(data);
      navigate("/");
      navigate(0);
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
            />
          </span>

          <span>
            <label htmlFor="name">Senha</label>
            <Input
              register={register("password")}
              type="password"
              name="password"
              placeholder="Senha"
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

          <Input type="submit" />
        </form>

        <div id="ou-line">
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
        </div>

        <a
          onClick={() => {
            navigate("/criar-conta");
            navigate(0);
          }}
          id="create"
        >
          Criar conta
        </a>
      </div>
    </div>
  );
};
