import React, { useContext, useState } from 'react';
import { MessagesContext } from '../../Context/MessagesContext';
import EmojiPicker from 'emoji-picker-react';
import { useParams } from 'react-router-dom';
import "./NewMessageForm.css";
import { IoSend } from "react-icons/io5";
import { BsEmojiSmile } from "react-icons/bs";

export default function NewMessageForm() {
  const { addNewMessage } = useContext(MessagesContext);
  const { contact_id } = useParams();
  const [newText, setNewText] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleSubmitNewMessage = () => {
    if (newText.trim().length >= 1) {
      addNewMessage(newText.trim()); 
      setNewText('');
      setShowEmojiPicker(false);
    }
  };

  const handleEmojiClick = (emojiData) => {
    setNewText(prev => prev + emojiData.emoji);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); 
      handleSubmitNewMessage();
    }
  };

  return (
    <div className="new-message-wrapper">
      {showEmojiPicker && (
        <div className="emoji-picker-container">
          <EmojiPicker onEmojiClick={handleEmojiClick} />
        </div>
      )}

      <form
        onSubmit={e => {
          e.preventDefault();
          handleSubmitNewMessage();
        }}
        className="formulario-nuevo-mensaje"
      >
        <button
          type="button"
          className="emoji-button"
          onClick={() => setShowEmojiPicker(!showEmojiPicker)}
        >
          <BsEmojiSmile size={24} />
        </button>

        <textarea
          id='text'
          name='text'
          required
          placeholder="Escribe un mensaje..."
          value={newText}
          onChange={e => setNewText(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <button type="submit" className="send-button">
          <IoSend size={24} />
        </button>
      </form>
    </div>
  );
}