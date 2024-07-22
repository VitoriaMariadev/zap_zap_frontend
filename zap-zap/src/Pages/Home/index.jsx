import './style.css'
import { api } from "../../Services/API"
import { useState, useEffect } from "react"
import { getIdUser } from "../../Services/localstorage"
const Home = () => {

    const [nome, setNome] = useState()
    const [id, setId] = useState()
    const [image, setImage] = useState()
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState()
    const myId = getIdUser()

    const getAllUsers = async () => {

        try{
            const res = await api.get("/users")
            setLoading(true)
            setUsers(res.data)
        }catch(erro){
            console.log(erro)
        }

    }

    const getUsersChat = async (id) => {
            const data = {
                id_user1: id,
                id_user2: myId
            }
    
            try{
                const res = await api.post('/chats', data)
    
                if (res.data.status === 400){
                    console.log('erro')
                }else{
                    console.log(res.data)
                    window.location.href = `/chat/${id}/${myId}/${res.data.id_chat}`
    
                }
                
    
            }catch(err){
                console.log(err)
            }
        
    }



    useEffect(() => {
        getAllUsers()
    }, [users])

    return(

        <div className="main-home">

            <div className="main-home-search">

                <div className="main-home-search-container">

                    <button>

                    </button>

                    <input type="text" />

                </div>

            </div>

            <div className="main-home-chats">

                {loading === true?(

                    <>
                    
                        {users.map((itens, index) => (
                         
                            <div className="main-chats-container">

                                <div className="main-chats-container-image">

                                    <div className="main-chats-container-image-circle"></div>

                                    <p onClick={() => getUsersChat(itens.id_user)} >{itens.name}</p>

                                </div>

                                <hr />

                            </div>
                        ))}

                    </>


                )
                :(
                    
                    <p>Carregando...</p>

                )}




            </div>
            
        </div>

    )

}

export default Home