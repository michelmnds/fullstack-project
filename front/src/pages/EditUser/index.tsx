import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/useAuth";
import { SignUpForm, SignUpInput, SignUpButtom } from "../SignUp/style";
import { EditTitle } from "./style";
import {z} from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const schema = z.object({
    full_name: z.string(),
    phone_number: z.string(),
})

type EditData = z.infer<typeof schema>

interface iEditData {
    full_name: string;
    phone_number: string;
}

export const EditUser = () => {
    const user = JSON.parse(localStorage.getItem('user')!)
    const navigate = useNavigate()
    const {register, handleSubmit} = useForm<EditData>({
        resolver: zodResolver(schema)
    })

    const editUser = async (data: iEditData) => {
        try {
            api.patch(`/users/${user.id}`, data)
            navigate('/login')
        } catch (error) {
            console.log(error)
        }
    }
    
    if (user) {
        return(
            <>
                <EditTitle>Edit User Info As {user.full_name}</EditTitle>
    
                <SignUpForm onSubmit={handleSubmit(editUser)}>
                    <label htmlFor="full_name">Name:</label>
                    <SignUpInput type="text" id='full_name' {...register('full_name')} defaultValue={user.full_name}/>
                    <label htmlFor="phone_number">Phone:</label>
                    <SignUpInput type="text" id='phone_number' {...register('phone_number')} defaultValue={user.phone_number}/>
    
                    <SignUpButtom>Save</SignUpButtom>
                </SignUpForm>
            </>
        )
    } else {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {navigate('/login')})
    }
};
