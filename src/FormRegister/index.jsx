import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
function FormRegister({ handleSubmit, onSubmitFunction, errors, register }) {
  const [termos, setTermos] = useState(false);
  return (
    <div className="Container">
      <h3 className="Container__Title">Register</h3>
      <form onSubmit={handleSubmit(onSubmitFunction)} className="Form">
        <div className="Form__Row">
          {errors.user && (
            <span className="Form__Error">{errors.user.message}</span>
          )}
          <input
            {...register("user")}
            type="text"
            className="Input Form__Input Input--first "
            placeholder="Nome de usuário*"
          />
        </div>
        <div className="Form__Row">
          {errors.name && (
            <span className="Form__Error">{errors.name.message}</span>
          )}
          <input
            {...register("name")}
            type="text"
            className="Input Form__Input Input--first "
            placeholder="Nome completo*"
          />
        </div>
        <div className="Form__Row">
          {errors.email && (
            <span className="Form__Error">{errors.email.message}</span>
          )}
          <input
            {...register("email")}
            type="text"
            className="Input Form__Input Input--first"
            placeholder="Endereço  de email*"
          />
        </div>
        <div className="Form__Row">
          {errors.emailConfirm && (
            <span className="Form__Error">{errors.emailConfirm.message}</span>
          )}
          <input
            {...register("emailConfirm")}
            type="text"
            className="Input Form__Input Input--first"
            placeholder="Confirme seu email*"
          />
        </div>
        <div className="Form__Senha">
          <div className="Senha__Col">
            {errors.password && (
              <span className="Form__Error">{errors.password.message}</span>
            )}
            <input
              {...register("password")}
              type="password"
              className="Input Form__Input Input--secound"
              placeholder="Senha*"
            />
          </div>
          <div className="Senha__Col">
            {errors.passwordConfirm && (
              <span className="Form__Error">
                {errors.passwordConfirm.message}
              </span>
            )}
            <input
              {...register("passwordConfirm")}
              type="password"
              className="Input Form__Input Input--secound"
              placeholder="Confirme senha*"
            />
          </div>
        </div>
        <div className="Form__Row Form__Row--termos">
          {errors.termo && (
            <span className="Form__Error">{errors.termo.message}</span>
          )}
          <input {...register("termo")} id="termo" type="checkbox" />
          <label className="Termos" htmlFor="termo">
            Eu aceito os termos de uso da aplicação
          </label>
        </div>
        <button type="submit" className="Button Button--Primary">
          CADASTRAR
        </button>
        <Link className="Link__Button" to="/">
          <button className="Button Button--Primary">VOLTAR</button>
        </Link>
      </form>
    </div>
  );
}
export default FormRegister;
