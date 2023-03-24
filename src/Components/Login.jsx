import React, { useContext } from "react";
import { MyContext } from "./Context";

export default function Login() {
  const loginVal = useContext(MyContext);

  return (
    <div className="login">
      <div className="loginContainer">
        <h1>Login</h1>
        <input className="nameLogin" type="text" placeholder="enter your name" onChange={(e) => { loginVal.setname(e.target.value) }} />
        <input type="password" placeholder="enter your password" onChange={(e) => { loginVal.setpassword(e.target.value) }} />
        <form action=""><button onClick={loginVal.handelclick}>Log in</button></form>
      </div>
    </div>
  );
}
