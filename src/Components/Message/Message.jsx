import React, { useContext } from 'react'
import { MessagesContext } from '../../Context/MessagesContext'
import { IoCheckmark, IoCheckmarkDone } from 'react-icons/io5'
import "../../assets/styles/Message.css"


export default function Message({ emisor, hora, id, texto, status = '' }) {
  const { handleDeleteMessage } = useContext(MessagesContext)

  let messageClass = 'chat-dialog'
  if (emisor === 'Yo') {
    messageClass += ' chat-dialog__my-message'
  }

  return (
    <div className={messageClass}>
      <span>{texto}</span>
      <div className="content_time_status">
        <span className="content_time">{hora}</span>
        {status === 'leído' ? (
          <IoCheckmarkDone className="check read" />
        ) : (
          <IoCheckmark className="check" />
        )}
        <button
          title="Eliminar mensaje"
          onClick={() => handleDeleteMessage(id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  )
}