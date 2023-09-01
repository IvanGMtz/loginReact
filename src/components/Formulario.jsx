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
          "Accept-Version":"2.2.1"
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
      <div>Registrarse</div>

      <input id="usuarioR" placeholder="Usuario" value={registerInfo.usernameR} onChange={handleRegisterChange} />
      <br />
      <input id="contraseñaR" placeholder="Contraseña" value={registerInfo.passwordR} onChange={handleRegisterChange} type="password"/>
      <br />
      <button onClick={register}>Registrarse</button>

      <div>Iniciar Sesión</div>

      <input id="usuario" placeholder="Usuario" value={loginInfo.username} onChange={handleLoginChange}/>
      <br />
      <input id="contraseña" placeholder="Contraseña" value={loginInfo.password} onChange={handleLoginChange} type="password"/>
      <br />
      <button onClick={login}>Iniciar Sesión</button>
    </>
  );
}
