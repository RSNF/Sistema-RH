import { createContext, useState, useEffect } from "react";
import { LoginRequest, CreateUserRequest, getUserLocalStorage, setUserLocalStorage, LogOutRequest } from "./Storage";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const isAuthenticated = !!getUserLocalStorage();

  useEffect(() => {
    const user = getUserLocalStorage();

    if (user) {
      setUser(user);
    }
  }, []);


  async function signIn({ email, password, checkbox }) {
    const {id, nome} = await LoginRequest(email, password, checkbox);

    const loginInfo = {id:id, nome:nome, email:email};

    setUser(id);
    setUserLocalStorage(JSON.stringify(loginInfo));
  }

  async function logOut() {
    await LogOutRequest();
    setUser(null);
  }

  async function createUser({ name, email, password }) {
    const response = await CreateUserRequest(name, email, password);
    console.log(response)
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, createUser, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}
