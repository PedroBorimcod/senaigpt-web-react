import "./login.css"

function Login() {


  return (
    <>


      <header></header>

      <main className="page-container">

        <div className="robo-image">

        </div>

        <div className="login-container">

          <img className="logo" src="../assets/imgs/Chat.png" alt="Senai GPT logo" />
          <h1
            id="meu titulo"
            className="titulo">Login</h1>

          <input type="email" placeholder="Insira o E-mail" className="inpt" />
          <input type="password" placeholder="Password" className="inpt" />

          <button className="btn">Entrar</button>

        </div>

      </main>

      <footer></footer>


    </>
  )
}

export default Login;