import "./chat.css"
import enviar from "../../assets/imgs/enviar.svg"
import menssagem from "../../assets/imgs/iconSet.svg"
import logo from "../../assets/imgs/Chat.png"
import chaticon from "../../assets/imgs/mensagem.svg"
import estrela from "../../assets/imgs/Star.svg"
import warning from "../../assets/imgs/ShieldWarning.svg"
import microfone from "../../assets/imgs/vector.svg"
import img from "../../assets/imgs/foto.svg"
import { useEffect, useState } from "react"







function Chat() {

    const [chats, setChats] = useState([]);
    const [chatSelecionado, setChatSelecionado] = useState(null);

    useEffect(() => {
        //Execulta toda vez que a tela abre. 
        getChats();

    }, []);

    const getChats = async () => {
        let response = await fetch("https://senai-gpt-api.azurewebsites.net/chats", {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("meuToken")
            }
        });
        console.log(response);

        if (response.ok == true) {
            let json = await response.json();   //pega as informaçoens do chat
            setChats(json);
        }
        else {
            if (response.status == 401);
            alert("Token invalido. Faça o login novamente");
            localStorage.clear();
            window.location.href = "/login";
        }
    }

    const onLogOutClick = () => {

        localStorage.clear();
        window.location.href = "/login";

    }
    const clickChat = (chat) => {

        setChatSelecionado(chat);
        console.log(chat)

    }

    return (
        <>


            <div className="container">
                <header className="left-panel">
                    <div className="top">
                        <button className="btn-new-chat">+New Chat</button>


                        {chats.map(chat => (
                            <button className="btn-chat" onClick={() => clickChat(chat)}>
                                <img src={menssagem} alt="icone chat" />
                                {chat.chatTitle}
                            </button>
                        ))}




                    </div>

                    <div className="botton"></div>


                    <button className="btn-chat">Clear Conversations</button>
                    <button className="btn-chat">Light mode</button>
                    <button className="btn-chat">My acconunt</button>
                    <button className="btn-chat">Uptadates & FAQ</button>
                    <button className="btn-chat" onClick={() => onLogOutClick()}>Log out</button>

                </header>

                <main className="central-panel">
                    {chatSelecionado == null && (

                        <>

                            <img className="central-panel-logo" src={logo} alt="Logo do SenaiGPT" />

                            <div className="dicas-container">

                                <div className="dicas-item">

                                    <h2>
                                        <img src={chaticon} alt="Mensagem" />
                                        Examples
                                    </h2>

                                    <p>Explique como um computador quantico funciona.</p>
                                    <p>Explique como um computador quantico funciona.</p>
                                    <p>Explique como um computador quantico funciona.</p>

                                </div>

                                <div className="dicas-item">
                                    <h2>
                                        <img src={estrela} alt="estrela" />
                                        Examples
                                    </h2>

                                    <p>Explique como um computador quantico funciona.</p>
                                    <p>Explique como um computador quantico funciona.</p>
                                    <p>Explique como um computador quantico funciona.</p>

                                </div>

                                <div className="dicas-item">
                                    <h2>
                                        <img src={warning} alt="" />
                                        Examples
                                    </h2>

                                    <p>Explique como um computador quantico funciona.</p>
                                    <p>Explique como um computador quantico funciona.</p>
                                    <p>Explique como um computador quantico funciona.</p>

                                </div>

                            </div>

                        </>
                    )}


                    <div className="input-container-1">

                        <img className="mic" src={microfone} alt="Microfone" />
                        <img className="chat.img" src={img} alt="Imagem" />


                        <input className="type-mensage" placeholder="Type a Mensage" type="Text" />

                        <img className="enviar" src={enviar} alt="Enviar" />

                    </div>

                </main>
            </div>


        </>
    )


}
export default Chat;