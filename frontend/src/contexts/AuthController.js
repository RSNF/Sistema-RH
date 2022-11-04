import api from "../services/api";


export async function getUser() {
    
    const user =  await api.get("check").then(response => {
        return response.data;
    })

    return user;
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
    await api.post("logout");
}

export async function CreateUserRequest(nome, email, senha) {
    
    return await api.post("users", { nome, email, senha });
        
}

export async function RegisterCandRequest(nome, email, tel) {
    
    
        
}