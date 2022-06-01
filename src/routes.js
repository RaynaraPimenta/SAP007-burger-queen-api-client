import { Route, BrowserRouter, Routes as RoutesDOM } from "react-router-dom";

import Login from "./pages/login/login.js";
import Register from "./pages/register/register.js";

const Routes= ()=> {
    return (
    <BrowserRouter>
        <RoutesDOM> 
            <Route exact path="/" element={<Login/>}/> 
            <Route path="/login" element={<Login/>}/>  
            <Route path="/register" element={<Register/>}/>
        </RoutesDOM> 
    </BrowserRouter>
    );
}

export default Routes;
{/* <Navigate replace to="/login" */}


