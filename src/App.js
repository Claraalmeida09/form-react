import { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { Container, Typography } from "@mui/material";

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography align="center" variant="h3" component="h1">
          Formulário de cadastro
        </Typography>
        <FormularioCadastro onSubmit={onSubmitForm} validate={validateCpf} />
      </Container>
    );
  }
}

function onSubmitForm(dados) {
  console.log(dados);
}

function validateCpf(cpf) {
  if (cpf.length != 11) {
    return { valido: false, texto: "CPF deve ter 11 digitos" };
  } else {
    return { valido: true, texto: "" };
  }
}

export default App;
