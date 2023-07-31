import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { useAuth } from "../../hooks/useAuth";
import { UserCard, MainTitle, ContactCard, ContactContainer, ContactTitle, NoContatTitle } from "./style";

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
    const {user} = useAuth()


    useEffect(() => {
        (async () => {
            const response = await api.get<iContact[]>(`users/${user.id}/contact`)

            setContacts(response.data)
        })()
    }, [])
    
    if (contacts) {
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
                </UserCard>
    
                <main>
                    <ContactTitle>Contacts:</ContactTitle>
    
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
                           
                        </ContactCard>
                    )}
                </ContactContainer>
                </main>
            </>
        )
    }

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
        </UserCard>

        <main>
            <NoContatTitle>No contacts found</NoContatTitle>
        </main>
    </>
    )
}