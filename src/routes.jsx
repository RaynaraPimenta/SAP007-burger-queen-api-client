import { Route, BrowserRouter, Routes as RoutesDOM } from 'react-router-dom'

import Login from './pages/login/login.js'
import Register from './pages/register/register.js'
import Menu from './pages/menu/menu.js'

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
