import React from 'react';
import './Nosotros.css';
import { usePointerPosition } from './usePointerPosition';

function useDelayedValue(value, delay) {
  const [delayedValue, setDelayedValue] = React.useState(value);

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDelayedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return delayedValue;
}

function Star({ position, opacity }) {
  return (
    <svg
      style={{
        position: 'absolute',
        transform: `translate(${position.x}px, ${position.y}px)`,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
      }}
      viewBox="0 0 24 24"
      fill={`rgba(255, 255, 0, ${opacity})`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
    </svg>
  );
}

function Canvas() {
  const pos1 = usePointerPosition();
  const pos2 = useDelayedValue(pos1, 100);
  const pos3 = useDelayedValue(pos2, 200);
  const pos4 = useDelayedValue(pos3, 100);
  const pos5 = useDelayedValue(pos3, 50);

  return (
    <>
      <Star position={pos1} opacity={1} />
      <Star position={pos2} opacity={0.8} />
      <Star position={pos3} opacity={0.6} />
      <Star position={pos4} opacity={0.4} />
      <Star position={pos5} opacity={0.2} />
    </>
  );
}

function Nosotros() {
  return (
    <div className="contenedor">
      <Canvas />
      <div className="container">
        <header>
          <img src="./sinsin1.png" alt='' />
          <br />
          <p>
            <h1>Explora la Vanguardia Culinaria: Cocineros Revelación 2024</h1>
          
            En SIN3, nos enorgullece destacar a los talentos emergentes que están redefiniendo la gastronomía Argentina. <br />
            En el año 2024, celebramos a un grupo selecto de chefs que han sido reconocidos como la revelación del año en Argentina.<br />
            Estos innovadores culinarios no solo han impresionado con su creatividad y técnica, sino que también han conquistado el paladar de críticos y comensales por igual.<br />
            Desde revolucionarias técnicas de cocina hasta interpretaciones audaces de la tradición culinaria Argentina, estos cocineros están marcando un nuevo estándar en el mundo gastronómico.<br />
            Sus restaurantes han sido aclamados no solo por su excepcional comida, sino también por ofrecer experiencias gastronómicas únicas que trascienden lo ordinario.<br />
            Unirse a la lista de Cocineros Revelación 2024 en Argentina es un testimonio de su dedicación y pasión por la cocina. Representan la próxima generación de talentos culinarios que continúan elevando el arte de la cocina Argentina a nuevas alturas.
          </p>
        </header>
      </div>
    </div>
  );
}

export default Nosotros;
