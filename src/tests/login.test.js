import "@testing-library/jest-dom";
import { screen, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from './../pages/login/login';
import { loginUser } from './../services/data/'

jest.mock('../services/data')
jest.mock('react-router-dom')

describe('Login', () => {
    beforeEach(() => {
        loginUser.mockClear();
    });
    it('Deverá logar o usuário autenticado', async () => {
        loginUser.mockResolvedValueOnce({})
        render(<Login />)
    
    const email = 'email@example.com';
    const password = '123456';
    const inputEmail = screen.getByPlaceholderText('usuario@usuario.com');
    userEvent.type(inputEmail, email)
    const inputPassword = screen.getByPlaceholderText("******");
    userEvent.type(inputPassword, password)

    const buttonLogin= screen.getByRole('Entrar');
    userEvent.click(buttonLogin)
    
    await waitFor(()=> {
        expect(loginUser).toHaveBeenCalledWith(email, password)
    });
    expect(loginUser).toHaveBeenCalleTimes(1)
    })
})

