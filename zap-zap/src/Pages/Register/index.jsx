import './style.css'
import { MyDropzone } from '../../Components/DropZone';
import { loginToken, setIdUser, setNameUser } from "../../Services/localstorage"
import { api } from "../../Services/API"
import { useState } from "react"

const Register = () => {

    const [name, setName] = useState();
    const [cpf, setCpf] = useState();
    const [image, setImage] = useState('');

    const registerUser = async () => {
        const data = {
            name,
            cpf,
            image
        }
        
        try{
            const res = await api.post('/creat_user', data)
            console.log(res.data)
            setIdUser(res.data.id_user)
            setNameUser(res.data.name)
            loginToken(res.data.token)
            setName('')
            setCpf('')
            window.location.href ='/home'

        }catch(err){
            console.log(err)
        }
    }

    return(

        <div className="main-register">

            <div className="container-main-register">

                <div className="container-main-register-left">

                </div>

                <div className="container-main-register-right">

                    <div className="container-main-register-right-image">

                        <MyDropzone/>

                    </div>

                    <div className="container-main-register-right-form">

                        <div className="container-main-register-right-form-name">
                            <p>NOME</p>
                            <input type="text" onChange={(e) => setName(e.target.value)}/>
                        </div>

                        <div className="container-main-register-right-form-name">
                            <p>CPF</p>
                            <input type="text" onChange={(e) => setCpf(e.target.value)}/>
                        </div>

                    </div>

                    <div className="container-main-register-right-button">

                        <button onClick={registerUser} >REGISTRAR</button>

                    </div>

                </div>

            </div>

        </div>

    )

}

export default Register