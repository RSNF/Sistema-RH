import api from "../services/api";


export async function getUser() {
    
    const user =  await api.get("check").then(response => {
        return response.data;
    })

    return user;
}

export async function LoginRequest(email, senha, checkbox) {
    try {
        const {nome, token} = await api.post("login", { email, senha, checkbox });
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`
        
        return { nome, email }

    } catch (error) {
        console.log(error)
        return null;
    }
}

export async function LogOutRequest() {
    await api.post("logout");
}

export async function CreateUserRequest(nome, email, senha) {
    
    return await api.post("users", { nome, email, senha });
        
}