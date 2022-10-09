import './style.css'
import { Input } from "../../components/form/Input";
import { Logo } from "../../components/Svg";

export const CreateAccount = () => {
    return (
        <div className="create-main-div">
            <div id="logo-div">
                <h1>Sistema RH</h1>
                <Logo/>
            </div>
                
            <div id="create-div">
                <h1>Criar Conta</h1>
                
                <form action="">
                    <label htmlFor="name">Nome</label>
                    <Input type="text" name="name" placeholder="Nome" />
                    <label htmlFor="email">Email</label>
                    <Input type="email" name="email" placeholder="Email" />
                    <label htmlFor="password">Senha</label>
                    <Input type="password" name="password" placeholder="Senha" />
                    
                    <div>
                        <button>Cancelar</button>
                        <button type='submit' id='create-button'> &#x2714; Cadastrar</button>
                    </div>

                </form>
            </div>
        </div>
    );
}