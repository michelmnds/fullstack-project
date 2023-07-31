import { useForm } from "react-hook-form"
import { LoginData, schema } from "./validator"
import { zodResolver } from "@hookform/resolvers/zod"
import { useAuth } from "../../hooks/useAuth"
import { InputDiv, LoginButton, LoginContainer, LoginForm, LoginInput, LoginTintle } from "./style"

export const Login = () => {
    
    const {register, handleSubmit} = useForm<LoginData>({
        resolver: zodResolver(schema)
    })
    
    const {signIn} = useAuth()
    return (
        <LoginContainer>
            <LoginTintle>Find User</LoginTintle>

            <LoginForm onSubmit={handleSubmit(signIn)}>
                <InputDiv>
                    <label htmlFor="email">User Email</label>
                    <LoginInput type="email" id="email" {...register("email")}/>
                </InputDiv>
                
                <div >
                    <LoginButton type="submit">Search</LoginButton>
                </div>
            </LoginForm>
        </LoginContainer>
    )
}