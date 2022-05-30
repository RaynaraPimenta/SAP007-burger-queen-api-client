import { useState } from "react";
import Cabecalho from "../componentes/cabecalho";
import Button from "../componentes/button";
import Input from "../componentes/input";

function App() {
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    return (
        <Cabecalho />
        <Form>
            <Input /> {/* nome */}
            <Input /> {/* email */}
            <Button /> {/* salaol */}
            <Button /> {/* cozinha */}
            <Input /> {/* senha */}
            <Button /> {/* cadastrar */}
        </Form>
    )
};
