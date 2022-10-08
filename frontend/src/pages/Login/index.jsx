import './style.css';

export const Login = () => {
    return (
        <div className="login-main-div">
            <div id="logo-div">
                <h1>Sistema RH</h1>
                <svg width="200" height="174" viewBox="0 0 200 174" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M33.6919 58.341L55.3146 45.8707L43.2451 24.9772H156.755L100.018 123.282L87.9489 102.352L66.3265 114.859L100.018 173.2L200 0H0L33.6919 58.341Z" fill="url(#paint0_linear_317_1986)"/>
                    <defs>
                        <linearGradient id="paint0_linear_317_1986" x1="248.804" y1="28.7081" x2="-90.2256" y2="56.0492" gradientUnits="userSpaceOnUse">
                        <stop offset="0.100157" stop-color="#059669"/>
                        <stop offset="0.707994" stop-color="#00D090"/>
                        </linearGradient>
                    </defs>
                </svg>
            </div>
                
            <div id="login-div">
                <h1>Login</h1>
                
                <form action="">
                    <input type="email" name='email' placeholder='Email' autoFocus/>
                    <input type="password" name='password' placeholder='Senha'/>
                    <div>
                        <div>
                            <input type="checkbox" name="checkbox" id="conect" />
                            <label htmlFor="conect">Mantenha-me conectado</label>
                        </div>
                        <a href="#">Esqueci a senha</a>
                    </div>
                    <input type="submit" />
                </form>

                <div id='ou-line'>
                        <hr />
                        <p>ou</p>
                        <hr />
                </div>

                <div id='social-signin'>
                    <a href="#">
                        <svg
                            width="45"
                            height="45"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z"
                                fill="#4B5768"
                            />
                        </svg>
                    </a>

                    <a href="#">
                        <svg width="42" height="42" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 3C9.10457 3 10 3.89543 10 5V8H16C17.1046 8 18 8.89543 18 10C18 11.1046 17.1046 12 16 12H10V14C10 15.6569 11.3431 17 13 17H16C17.1046 17 18 17.8954 18 19C18 20.1046 17.1046 21 16 21H13C9.13401 21 6 17.866 6 14V5C6 3.89543 6.89543 3 8 3Z" fill="#4B5768" />
                        </svg>
                    </a>

                    <a href="#">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 12C6 15.3137 8.68629 18 12 18C14.6124 18 16.8349 16.3304 17.6586 14H12V10H21.8047V14H21.8C20.8734 18.5645 16.8379 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C15.445 2 18.4831 3.742 20.2815 6.39318L17.0039 8.68815C15.9296 7.06812 14.0895 6 12 6C8.68629 6 6 8.68629 6 12Z" fill="#4B5768" />
                    </svg>
                    </a>
                    
                </div>
                <a href="#" id='create'>Criar conta</a>
            </div>
        </div>
    );
}