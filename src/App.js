import "./App.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Switch, Route, useHistory } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./NavBar";
import FormRegister from "./FormRegister";
import Card from "./Card";
import { useState } from "react";
import Login from "./Login";
function App() {
  const [dataObject, setDataObject] = useState({});
  let history = useHistory();
  const formSchema = yup.object().shape({
    user: yup
      .string()
      .required("Usuário Obrigatório")
      .matches("^@[A-Za-z0-9._]+$", "Usuário Inválido"),
    name: yup.string().required("Nome Obrigatório"),
    email: yup.string().required("Email Obrigatório").email("Email Inválido"),
    emailConfirm: yup
      .string()
      .required("Confirmação Email Obrigatório")
      .email("Confirmaçao de Email Inválido"),
    password: yup.string().required("Senha Inválida"),
    passwordConfirm: yup.string().required("Senha Inválida"),
    termo: yup.bool().required("Campo Obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const onSubmitFunction = (data) => {
    setDataObject(data);
    history.push("/Card");
  };
  const onSubmitLogin = (data) => {
    console.log(data);
  };
  console.log(errors);
  return (
    <div className="App App-header">
      <Switch>
        <Route exact path="/">
          <Login
            onSubmitLogin={onSubmitLogin}
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
          />
          <Navbar />
        </Route>
        <Route path="/Home">
          <Navbar />
          <Home />
        </Route>
        <Route path="/Register">
          {
            <FormRegister
              handleSubmit={handleSubmit}
              onSubmitFunction={onSubmitFunction}
              register={register}
              errors={errors}
            />
          }
        </Route>
        <Route path="/Card">
          <Card dataObject={dataObject} />
        </Route>
      </Switch>
    </div>
  );
}
export default App;
