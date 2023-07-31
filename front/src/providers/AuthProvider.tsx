import { ReactNode, createContext, useState } from "react";
import { LoginData } from "../pages/Login/validator";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { iUser } from "../pages/Dashboard";

interface iAuthProviderProps {
    children: ReactNode
}

interface iAuthContextsValues {
    signIn: (data: LoginData) => Promise<void>
}

export const AuthContext = createContext({} as iAuthContextsValues)

export const AuthProvider = ({children}: iAuthProviderProps) => {
    const [user, setUser] = useState<iUser>()
    
    const navigate = useNavigate()
    const signIn = async (data: LoginData) => {
        try {
        const response = await api.get('/users')
        response.data.map((user: iUser) => {
            if(user.email == data.email){
                setUser(user)
                    
                navigate('dashboard')
            } 
            })   
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <AuthContext.Provider value={{signIn, user}}>
            {children}
        </AuthContext.Provider>
    )
}