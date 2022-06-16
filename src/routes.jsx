import { Route, BrowserRouter, Routes as RoutesDOM } from 'react-router-dom'

import Login from './pages/login/login.jsx'
import Register from './pages/register/register.jsx'
import Menu from './pages/menu/menu.jsx'

const Routes = () => {
  return (
    <>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <RoutesDOM>
                <Route exact path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/menu" element={<Menu />} />
            </RoutesDOM>
        </BrowserRouter>
    </>
  )
}

export default Routes
