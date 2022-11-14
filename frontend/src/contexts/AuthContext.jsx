import { createContext, useState, useEffect } from "react";
import {
  LoginRequest,
  CreateUserRequest,
  getUser,
  LogOutRequest,
  RegisterCandRequest,
  CreateVagaRequest
} from "./AuthController";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {

  const [user, setUser] = useState(null);
  const isAuthenticated = !!user;

  useEffect(() => {
    let ignore = false;

    (async function recoverUserInfo() {
      const result = await getUser();
      if (!ignore){
        setUser(result);
      } 
    })()
    
    return () => { ignore = true; }
  }, []);

  async function signIn({ email, password, checkbox }) {
    const { id, nome } = await LoginRequest(email, password, checkbox);

    const loginInfo = { id: id, nome: nome, email: email };

    setUser(loginInfo);
  }

  async function logOut() {
    await LogOutRequest();
    setUser(null);
  }

  async function createUser({ name, email, password }) {
    const response = await CreateUserRequest(name, email, password);
    return response;
  }

  async function registerCand({name, email, tel}){
    const response = await RegisterCandRequest(name, email, tel);
    return response;
  }

  async function createVaga({ titulo, descricao, objetivos, email }) {
    const response = await CreateVagaRequest(titulo, descricao, objetivos, email);
    return response;
  }

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, signIn, createUser, logOut, registerCand, createVaga }}
    >
      {children}
    </AuthContext.Provider>
  );
}
