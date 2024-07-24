import React, { useState, useEffect } from 'react';
import { createConnection, sendMessage } from './chat';

const serverUrl = 'https://localhost:1234';

function ChatRoom({ roomId }) {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);

  function handleSendClick() {
    sendMessage(message);
  }

  return (
    <>
      <h1>¡Bienvenido a {roomId}!</h1>
      <input value={message} placeholder="Escribe tu mensaje" onChange={e => setMessage(e.target.value) } />
      <button onClick={handleSendClick}>Enviar</button>
    </>
  );
}

export default ChatRoom;
