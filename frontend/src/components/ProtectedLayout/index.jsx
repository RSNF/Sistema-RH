import React from "react";
import { useAuth } from "../../contexts/useAuth"

export const ProtectedLayout = ({children}) => {
    const auth = useAuth();
    if(!auth) {
        return <h1>Sem acesso!</h1>;
    }

    return children;
}