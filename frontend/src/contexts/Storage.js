import api from "../services/api";


export function setUserLocalStorage(user) {
    localStorage.setItem("sistemaRH", user);
}

export function getUserLocalStorage() {
    const user = localStorage.getItem("sistemaRH");

    if (!user) {
        return null;
    }

    return user ?? null;
}

export async function LoginRequest(email, senha, checkbox) {
    try {
        const request = await api.post("login", { email, senha, checkbox });
        return request.data
    } catch (error) {
        return null;
    }
}

export async function LogOutRequest() {
    await api.post("sair");
    localStorage.clear();
}

export async function CreateUserRequest(nome, email, senha) {
    try {
        await api.post("users", { nome, email, senha });
        return {msg: 'Usuário cadastrado!'};
    } catch (error) {
        return null;
    }
}