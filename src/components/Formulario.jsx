import React, { useState } from "react";

export default function Formulary({ usuario, contraseña, usuarioR, contraseñaR}) {
  const [loginInfo, setLoginInfo] = useState({
    username: usuario,
    password: contraseña,
  });
  const [registerInfo, setRegisterInfo] = useState({
    usernameR: usuarioR,
    passwordR: contraseñaR,
  });

  const handleLoginChange = (event) => {
    const { id, value } = event.target;
    setLoginInfo((prevInfo) => ({
      ...prevInfo,
      [id]: value,
    }));
  };

  const handleRegisterChange = (event) => {
    const { id, value } = event.target;
    setRegisterInfo((prevInfo) => ({
      ...prevInfo,
      [id]: value,
    }));
  };

  const login = async () => {
    const { username, password } = loginInfo;

    const res = await fetch("http://127.24.43.221:5076/login", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Accept-Version":"1.0.0"
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    
    if (!res.ok) {
      alert("Usuario o contraseña incorrectos!!");
    } else {
      alert("Logueado correctamente :)");  
    }
  };

  const register = async () => {
    const { usernameR, passwordR } = registerInfo;

    const res = await fetch("http://127.24.43.221:5076/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        usernameR,
        passwordR,
      }),
    });
    
    if (!res.ok) {
      alert("Error al realizar el registro!!");
    } else {
      alert("Registrado correctamente :D");
    }
  };

  return (
    <>
      <div className="container mt-5">
        <h1>Aplicación de Registro e Inicio de Sesión</h1>

        <div className="mb-3">Registrarse</div>
        <input
          id="usernameR"
          className="form-control mb-2"
          placeholder="Usuario"
          value={registerInfo.usernameR}
          onChange={handleRegisterChange}
        />
        <input
          id="passwordR"
          className="form-control mb-2"
          placeholder="Contraseña"
          value={registerInfo.passwordR}
          onChange={handleRegisterChange}
          type="password"
        />
        <button className="btn btn-primary" onClick={register}>
          Registrarse
        </button>

        <div className="mt-4">Iniciar Sesión</div>
        <input
          id="username"
          className="form-control mb-2"
          placeholder="Usuario"
          value={loginInfo.username}
          onChange={handleLoginChange}
        />
        <input
          id="password"
          className="form-control mb-2"
          placeholder="Contraseña"
          value={loginInfo.password}
          onChange={handleLoginChange}
          type="password"
        />
        <button className="btn btn-primary" onClick={login}>
          Iniciar Sesión
        </button>
      </div>
    </>
  );
}
