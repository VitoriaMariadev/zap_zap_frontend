
import React from 'react'
import { Routes, Route } from 'react-router-dom'

// import Inicio from './Inicio'
import Register from './Register'
import Home from './Home'
import Chat from './Chat'

const RotasExistente = props => (
    <main>
        <Routes>
            {/* <Route  exact path="/" element={<Inicio/>}></Route> */}
            <Route  exact path="/" element={<Register/>}></Route>
            <Route  exact path="/home" element={<Home/>}></Route>
            <Route  exact path="/chat/:id_user/:id_send/:id_chat" element={<Chat/>}></Route>
        </Routes>
    </main>
)

export default RotasExistente