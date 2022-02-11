import React, { useState } from "react";
import { TextField, Button, Switch, FormControlLabel } from "@mui/material";

function FormularioCadastro({ onSubmit, validate }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(false);
  const [errors, setErrors] = useState({ cpf: { valido: true, texto: "" } });
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(nome, sobrenome);
        onSubmit({ nome, sobrenome, cpf, promocoes, novidades });
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        id="nome"
        label="Nome"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        error={!errors.cpf.valido}
        helperText={errors.cpf.texto}
        onBlur={(event) => {
          const ehValido = validate(cpf);
          setErrors({ cpf: ehValido });
        }}
        id="cpf"
        label="CPF"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <FormControlLabel
        control={
          <Switch
            checked={promocoes}
            name="promocoes"
            color="primary"
            onChange={(event) => {
              setPromocoes(event.target.checked);
            }}
          />
        }
        label="Promoções"
      />

      <FormControlLabel
        control={
          <Switch
            checked={novidades}
            name="novidades"
            color="primary"
            onChange={(event) => {
              setNovidades(event.target.checked);
            }}
          />
        }
        label="Novidades"
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
