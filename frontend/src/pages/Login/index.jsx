import './style.css';
import { Input } from '../../components/form/Input';
import { Logo, Facebook, Twitter, Google } from '../../components/Svg';
import { Link } from '../../components/Link';

export const Login = () => {
    return (
        <div className="login-main-div">
            <div id="logo-div">
                <h1>Sistema RH</h1>
                <Logo/>
            </div>
                
            <div id="login-div">
                <h1>Login</h1>
                
                <form action="">
                    <Input type="email" name="email" placeholder="Email" />
                    <Input type="password" name="password" placeholder="Senha" />
                    <div>
                        <div>
                            <Input type="checkbox" name="checkbox"/>
                            <label htmlFor="checkbox">Mantenha-me conectado</label>
                        </div>
                        <Link text="Esqueci a senha"/>
                    </div>
                    <Input type="submit"/>
                </form>

                <div id='ou-line'>
                        <hr />
                        <p>ou</p>
                        <hr />
                </div>

                <div id='social-signin'>
                    <a href="#"><Facebook/></a>
                    <a href="#"><Twitter/></a>
                    <a href="#"><Google/></a>
                </div>
                
                <a href="#" id='create'>Criar conta</a>
            </div>
        </div>
    );
}