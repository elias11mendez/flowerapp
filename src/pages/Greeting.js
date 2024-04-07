import React from "react";
import { useNavigate } from "react-router-dom";
import flowerImage from '../assets/img/flower.png'; 
const Greeting = () => {
  const navigate = useNavigate(); 
  const back = () => {
    navigate('/');
  };
  const name = localStorage.getItem('name');
  return (
    <>
      <div className="flower-position">
        <button className="btn-back" onClick={back} >
          Atras
        </button>
        <div>
        <img  className="moving-image" src={flowerImage} alt="Ejemplo" />
        </div>
        <p className="text">¡Hola! <span>{name}</span>  ¡Que tengas un día maravilloso!❤️ </p>
      </div>
    </>
  );
};
export default Greeting;
