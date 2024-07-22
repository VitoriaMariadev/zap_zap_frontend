import './style.css'
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from "react"
import { api } from "../../Services/API"

const Chat = () => {
    const location = useLocation();
    const pathArray = location.pathname.split('/');
    const id_chat = pathArray[pathArray.length - 1];
    const id_user1 = pathArray[pathArray.length - 2];
    const id_user2 = pathArray[pathArray.length - 3];

    const [message, setMessage] = useState()
    const [loading, setLoading] = useState(false)
    const [text, setText] = useState()

    const getAllMessages = async () => {

        try {

            const res = await api.get(`/chats/${id_chat}/messages`)

            if (res.data.mensagem === 'Não há mensagens neste chat.'){
                setLoading(false)
            }else{
                setMessage(res.data)
                setLoading(true)

            }

        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    const sendMessage = async () => {
        const data = {
            id_chat,
            id_sender: id_user1,
            message_text: text
        }
        
        try{
            const res = await api.post('/messages', data)
            setText('')


        }catch(err){
            console.log(err)
        }


    }

    useEffect(() => {
        getAllMessages()
    }, [message, sendMessage])

    return(

        <div className="main">

            <div className="main-chat">

                <div className="main-chat-image">

                    <div className="main-chat-image-circle">

                    </div>

                    <p>
                        Nome
                    </p>

                </div>

                <div className="main-chat-container">

                    <div className="main-chat-container-send">
                        <input type="text" onChange={(e) => setText(e.target.value)} value={text}/>
                        <button onClick={sendMessage} ></button>
                    </div>


                    {loading === true?(

                        <>

                            {message.map((itens, index) => (
                                
                                <>

                                {itens.id_sender == id_user1?(

                                    <div className="main-chat-container-message send">
                                        <p>{itens.message_text}</p>
                                    </div>


                                ):(

                                    <div className="main-chat-container-message">
                                        <p>{itens.message_text}</p>
                                    </div>

                                )}

                                </>
                                
                            ))}

                        </>


                        )
                        :(

                        <   p></p>

                        )}


                
                </div>

            </div>

        </div>

    )

}

export default Chat