import React, { useState } from 'react';
import ChatRoom from './ChatRoom';
import './Service.css';

export default function Service() {
  const [roomId, setRoomId] = useState('Menú personalizado');
  const [showChat, setShowChat] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías agregar la lógica para enviar los datos del formulario
    alert(`¡Gracias por registrarte, ${name}!`);
    setIsFormSubmitted(true);
    setShowChat(true);
  };

  return (
    <div className="container">
      <p>
        La empresa SIN3 especializada en servicios alimenticios personalizados ofrece una amplia gama de opciones innovadoras para satisfacer las necesidades de sus clientes:
        <br /><br />
        <h3>1. Menú personalizado:</h3>
        Los clientes podrán crear su propio menú personalizado en línea, eligiendo ingredientes, sabores y texturas según sus preferencias individuales.
        <br /><br />
        
        <h3>2. Servicio de suscripción mensual:</h3>
        Los clientes recibirán la revista de comida saludable y equilibrada, sin gluten, sin lactosa y sin azúcar, con recetas creativas y variadas.
        <br /><br />
        
        <h3>3. Talleres de cocina virtual:</h3>
        Talleres de cocina en línea en los que los clientes podrán aprender a preparar platos deliciosos y saludables que se ajusten a sus necesidades dietéticas específicas, con la guía de chefs expertos.
        <br /><br />
        
        <h3>4. Servicio de catering para eventos especiales:</h3>
        Brindamos servicios de catering personalizados para eventos especiales, como bodas, cumpleaños o reuniones corporativas, ofreciendo opciones de comida sin gluten, sin lactosa y sin azúcar con la elegancia y deliciosidad inmejorable.
        <br /><br />
        
        <h3>5. Asesoramiento nutricional personalizado:</h3>
        Ofrecemos consultas de nutrición personalizadas, podrán recibir orientación de expertos sobre cómo seguir una dieta equilibrada y saludable que se adapte a sus necesidades específicas de intolerancias alimentarias.
        <br /><br />

        <hr />
        <div className="form-container">
            <h1>Registrate:</h1>

           {!isFormSubmitted ? (
            <form onSubmit={handleSubmit} className="contact-form">
               <input
              type="text"
              placeholder="Ingresa tu nombre completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
               />
               <input
               type="email"
               placeholder="Ingresa tu mail"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               required
               />
                <label>
                Selecciona donde quieres enviar el mensaje:{' '}
                 <select value={roomId} onChange={e => setRoomId(e.target.value)}>
                <option value="Menú personalizado">Menú personalizado</option>
                <option value="Suscripción mensual">Suscripción mensual</option>
                <option value="Taller Online">Taller Online</option>
                <option value="Asesoramiento Nutricional">Asesoramiento Nutricional</option>
                 </select>
                </label>
                <button type="submit">Ingresar</button>
            </form>):(
              <>
              <h1 className="thank-you">¡Ya estas dentro!</h1>
              <button onClick={() => setShowChat(!showChat)}>
               {showChat ? 'Cerrar chat' : 'Abrir chat'}
              </button>
              {showChat && <hr />}
              {showChat && <ChatRoom roomId={roomId} />}
              </>)}
              
          </div></p>
          </div>
  );}
