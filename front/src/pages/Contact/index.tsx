import { useForm } from "react-hook-form"
import { useAuth } from "../../hooks/useAuth"
import { MainContactTitle } from "./style"
import { iContactData } from "../../providers/AuthProvider"
import {z} from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { api } from "../../services/api"
import { useNavigate } from "react-router-dom"

const contactSchema = z.object({
    email: z.string().email().nonempty(),
    full_name: z.string().nonempty(),
    phone_number: z.string().nonempty(),

})

export const Contact = () => {
    const {user} = useAuth()
    const navigate = useNavigate()
    const {register, handleSubmit} = useForm<iContactData>({
        resolver: zodResolver(contactSchema)
    })

     
    const createContact = async (data: iContactData) => {
        try {
            const contactList = await api.get(`users/${user!.id}/contact`)
            const emailList = contactList.data.map((contact: iContactData) => {return contact.email})
            if (emailList.includes(data.email)){
                return alert("Contact already registered")
            }
            else {
                await api.post(`users/${user!.id}/contact`, data)
                navigate('/dashboard')
            }
        
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <>
            <MainContactTitle>Create New Contact as {user.full_name}</MainContactTitle>
            
            <form onSubmit={handleSubmit(createContact)}>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" {...register('email')}/>
                <label htmlFor="full_name">Full Name:</label>
                <input type="text"  id='full_name' {...register('full_name')}/>
                <label htmlFor="phone_number" >Phone Number:</label>
                <input type="text" id="phone_number" {...register('phone_number')}/>
                
                <button type="submit">Create</button>
            </form>
        </>
    )
}