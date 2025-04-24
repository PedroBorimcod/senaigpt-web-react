import "./login.css"
import logo from "../../assets/imgs/Chat.png"
import { useState } from "react";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 
  
  
  const onLoginClick = async () => {

    // mantem o escopo existente
     let response = await fetch ("https://senai-gpt-api.azurewebsites.net/login", {
      //serve para conectar com o back end

      headers: {
        "Content-Type": "application/json"
        //para definir meus cabeçalhos da minha requisiçao
      },
      method: "POST", //metodo que envia dados
      body: JSON.stringify({
        email: email,
        password: password
      })
      //minha requisicao
      


     });
   console.log(response);


   window.location.href = "/chat";
  }


  return (
    <>


      <header></header>

      <main className="page-container">

        <div className="robo-image">

        </div>

        <div className="login-container">

          <img className="logo" src={logo} alt="Senai GPT logo" />
          <h1
            id="meu titulo"
            className="titulo">Login</h1>

          <input type="email" placeholder="Insira o E-mail" className="inpt" value={email} onChange={event => setEmail(event.target.value)} />
          <input type="password" placeholder="Password" className="inpt" value={password} onChange={event => setPassword(event.target.value)}/>

          <button className="btn"  onClick={() => onLoginClick()}>Entrar</button>

        </div>

      </main>

      <footer></footer>


    </>
  )
}

export default Login;