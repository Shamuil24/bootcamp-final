import {BrowserRouter, Route} from "react-router-dom" 
import Reg from "../Registration/Reg"
import { Navigate, Routes } from "react-router" 
import Auth from "../Authorization/Auth"


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<Auth />}/>
                <Route path="/register" element={<Reg />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router