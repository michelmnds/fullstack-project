import { Routes, Route } from "react-router-dom"
import { Login } from "../pages/Login"
import { Dashboard } from "../pages/Dashboard"
import { Contact } from "../pages/Contact"
import { SignUp } from "../pages/SignUp"
import { EditUser } from "../pages/EditUser"
import { EditContact } from "../pages/EditContact"

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<SignUp/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/edit_user" element={<EditUser/>}/>
            <Route path="/edit_contact" element={<EditContact/>}/>
        </Routes>
    )
}