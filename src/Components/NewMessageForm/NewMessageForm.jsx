import React, { useContext } from 'react'
import { MessagesContext } from '../../Context/MessagesContext'
import "../../assets/styles/NewMessageForm.css"
import { IoSend } from "react-icons/io5";

export default function NewMessageForm() {
    const { addNewMessage } = useContext(MessagesContext)

    const handleSubmitNewMessage = (e) => {
        e.preventDefault()
        let new_text = e.target.text.value
        addNewMessage(new_text)
        e.target.text.value = ''
    }

    return (
        <form onSubmit={handleSubmitNewMessage} className="formulario-nuevo-mensaje">
                <textarea id='text' name='text' minLength={5} required placeholder="Escribe un mensaje..." />
                    <button type="submit" className="send-button">
                    <IoSend size={24} />
                </button>
        </form>
    )
}