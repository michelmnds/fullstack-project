import { useForm } from "react-hook-form";
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

export const EditContact = () => {
    const user = JSON.parse(localStorage.getItem('user')!)
    const navigate = useNavigate()
    const contact= localStorage.getItem('contact')
    const contactJSON= JSON.parse(contact!)
    const {register, handleSubmit} = useForm<EditData>({
        resolver: zodResolver(schema)
    })
    const editContact = async (data: iEditData) => {
        try {
            api.patch(`/users/contact/${contactJSON.id}`, data)
            navigate('/dashboard')
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
    
    if (user){
        return(
            <>
                <EditTitle>Edit Contact Info As {user.full_name}</EditTitle>
    
                <SignUpForm onSubmit={handleSubmit(editContact)}>
                    <label htmlFor="full_name">Name:</label>
                    <SignUpInput type="text" id='full_name' {...register('full_name')} defaultValue={contactJSON.full_name}/>
                    <label htmlFor="phone_number">Phone:</label>
                    <SignUpInput type="text" id='phone_number' {...register('phone_number')} defaultValue={contactJSON.phone_number}/>
    
                    <SignUpButtom>Save</SignUpButtom>
                </SignUpForm>
            </>
        )
    } else {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {navigate('/login')})
    }
};
