import { useNavigate } from "react-router-dom"
import { SignUpButtom, SignUpForm, SignUpInput, SignUpTitle } from "./style"
import {z} from 'zod'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { api } from "../../services/api"

const schema = z.object({
    email: z.string().email().nonempty(),
    full_name: z.string().nonempty(),
    phone_number: z.string().nonempty(),
})

type SignUpData = z.infer<typeof schema>

interface iSignUpData {
    email: string;
    full_name: string;
    phone_number: string;
}


export const SignUp = () => {
    const navigate = useNavigate()

    const {register, handleSubmit} = useForm<SignUpData>({
        resolver: zodResolver(schema)
    })
    
    const createUser = async (data: iSignUpData) => {
        try {
            await api.post('users/', data)
            navigate('/login')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <SignUpTitle>Sign Up</SignUpTitle>

            <SignUpForm onSubmit={handleSubmit(createUser)}>
                <label htmlFor="email">Email:</label>
                <SignUpInput type="email" id="email" {...register('email')}/>

                <label htmlFor="full_name">Name:</label>
                <SignUpInput type="text" id="full_name" {...register('full_name')}/>

                <label htmlFor="phone_number">Phone:</label>
                <SignUpInput type="text" id="phone_number" {...register('phone_number')}/>

                <SignUpButtom >Sign Up</SignUpButtom>
            </SignUpForm>
        </>
    )
}