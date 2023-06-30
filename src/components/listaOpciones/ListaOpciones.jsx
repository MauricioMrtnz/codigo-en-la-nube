import "./ListaOpciones.scss";
import flecha from "../../assets/icons/iconoFlecha.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

export const ListaOpciones = (props) => {
  
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  }
  return (
    <div className="docNav__button" >
      <div className="docNav__button__container"  onClick={toggleVisibility}>
        <h3 className="docNav__button__container__title"> {props.title} </h3>
        <img
          className={`docNav__button__container__img ${isVisible ? 'visible' : ''}`}
          src={flecha}
          alt="icono flecha desplegable"
        />
      </div>

      <ul className={`docNav__button__list ${isVisible ? 'visible' : ''}`}>
        {props.ListaOpciones.map((opcion, index) => (
          <li className="docNav__button__list__item" key={index}>
            <Link to={props.title+'/'+opcion} >{opcion}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
