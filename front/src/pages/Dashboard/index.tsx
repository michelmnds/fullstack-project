import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { UserCard, MainTitle, ContactCard, ContactContainer, ContactTitle, NoContatTitle, ContactHeader, HeaderButton, CardButtonDiv, CardButton } from "./style";
import { useNavigate } from "react-router-dom";

export interface iContact {
    id: number;
    full_name: string;
    email: string;
    phone_number: string;
}

export interface iUser{
    id: number;
    full_name: string;
    email: string;
    phone_number: string;
}

export const Dashboard = () => {
    const [contacts, setContacts] = useState<iContact[]>([])
    const user = JSON.parse(localStorage.getItem('user')!)
    const navigate = useNavigate()

    useEffect(() => {
        (async () => {
            if (user) {
                const response = await api.get<iContact[]>(`users/${user.id}/contact`)

                setContacts(response.data)
            } else {
                navigate('/')
            }
        })()
    }, [])

    if (user) {
        return (
            <>
                <MainTitle>User Dashboard - {user.full_name}</MainTitle>
    
                <UserCard>
                    <p>
                        ID: {user.id}
                    </p>
                    <p>
                        Email: {user.email}
                    </p>
                    <p>
                        Full Name: {user.full_name}
                    </p>
                    <p>
                        Phone Number: {user.phone_number}
                    </p>
    
                    <CardButtonDiv>
                        <CardButton onClick={() => navigate('/edit_user')}>Update User</CardButton>
                        <CardButton onClick={async () => {
                            try {
                                contacts.forEach(contact => {
                                    api.delete(`users/contact/${contact.id}`)
                                })
                                await api.delete(`users/${user.id}`)
                                navigate("/")
    
                            } catch (error) {
                                console.log(error)
                            }
                        }}>Delete User</CardButton>
                    </CardButtonDiv>
                </UserCard>
    
                <main>
                    <ContactHeader>
                        <ContactTitle>Contacts:</ContactTitle>
                        <HeaderButton onClick={() => navigate("/contact")}>Add New Contact</HeaderButton>
                    </ContactHeader>
    
                    <ContactContainer>
                    {contacts.map((contact) => 
                        <ContactCard key={contact.id}>
                            <p>
                                ID: {contact.id}
                            </p>
                            <p>
                                Email: {contact.email}
                            </p>
                            <p>
                                Full Name: {contact.full_name}
                            </p>
                            <p>
                                Phone Number: {contact.phone_number}
                            </p>
                           
                           <CardButtonDiv>
                            <CardButton onClick={async () => {
                             try {
                                await api.delete(`users/contact/${contact.id}`)
                                window.location.reload()
                             } catch (error) {
                                console.log(error)
                             }
    
                            }}>Delete Contact</CardButton>
                            <CardButton onClick={() => {
                                const contactJSON = JSON.stringify(contact)
                                localStorage.setItem('contact', contactJSON)
                                navigate("/edit_contact")
                            }}>Edit Contact</CardButton>
                           </CardButtonDiv>
                        </ContactCard>
                    )}
                </ContactContainer>
                </main>
            </>
        )
    }
}