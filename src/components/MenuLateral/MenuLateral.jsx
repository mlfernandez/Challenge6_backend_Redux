import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./MenuLateral.css";
import { connect } from "react-redux";
import axios from "axios";
import {
  CLASES,
  PROFILE,
  JOIN,
  JOINMONITOR,
  GETROOMMONITOR,
  NEWROOM,
  PAYMENT,
  CODEQR,
  ACTIVEROOM
} from "../../redux/types";
import { NavLink } from "react-router-dom";

const Menulateral = (props) => {
  console.log("PROBANDO EL MENU LATERAL");

  let history = useHistory();
  let credentials = props.credentials;
  const [useroom, setUseroom] = useState([]);

  const cambiaDatos = async (info) => {
    switch (info) {
      case "profile":
        props.dispatch({ type: PROFILE, payload: info });

        break;

      case "useroom":
        props.dispatch({ type: CLASES, payload: info });

        break;

      case "joinuser":
        props.dispatch({ type: JOIN, payload: info });

        break;

      case "monitoroom":
        props.dispatch({ type: JOIN, payload: info });

        break;

      case "joinmonitor":
        props.dispatch({ type: JOINMONITOR, payload: info });

        break;

      case "newroom":
        props.dispatch({ type: NEWROOM, payload: info });

        break;

      case "payment":
        props.dispatch({ type: PAYMENT, payload: info });

        break;

      case "codeqr":
        props.dispatch({ type: CODEQR, payload: info });

        break;

      case "activeroom":
        props.dispatch({ type: ACTIVEROOM, payload: info });

        break;

      default:

        break;
    }
  };

  //IFS PARA MOSTRAR UN MENU SEGUN EL TIPO DE USUARIO QUE ACCEDE A LA APLICACIÓN
  if (
    props.credentials.user.isAdmin === false &&
    props.credentials.perfil === "user"
  ) {
    return (
      <div className="boxLateral">
        <div className="lateralMenu">
          <div
            className="botomMenuLateral"
            onClick={() => cambiaDatos("profile")}
          >
            Perfil
          </div>
          <div
            className="botomMenuLateral"
            onClick={() => cambiaDatos("useroom")}
          >
            Mis clases
          </div>
          <div
            className="botomMenuLateral"
            onClick={() => cambiaDatos("joinuser")}
          >
            Reservar
          </div>
          <div className="botomMenuLateral">Taquilla</div>
          <div
            className="botomMenuLateral"
            onClick={() => cambiaDatos("payment")}
          >
            Suscripción
          </div>
          <div
            className="botomMenuLateral"
            onClick={() => cambiaDatos("codeqr")}
          >
            Acceso GYM
          </div>
        </div>
      </div>
    );
  } else if (
    props.credentials.user.isAdmin === false &&
    props.credentials.perfil === "monitor"
  ) {
    return (
      <div className="boxLateral">
        <div className="lateralMenu">
          <div
            className="botomMenuLateral"
            onClick={() => cambiaDatos("profile")}
          >
            Perfil
          </div>
          <div
            className="botomMenuLateral"
            onClick={() => cambiaDatos("monitoroom")}
          >
            Mis clases
          </div>
          <div
            className="botomMenuLateral"
            onClick={() => cambiaDatos("joinmonitor")}
          >
            Reservar
          </div>
          <div className="botomMenuLateral">Taquilla</div>
          <div
            className="botomMenuLateral"
            onClick={() => cambiaDatos("newroom")}
          >
            Crear sala
          </div>
          <div
            className="botomMenuLateral"
            onClick={() => cambiaDatos("codeqr")}
          >
            Acceso GYM
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="boxLateral">
        <div className="lateralMenu">
          <div className="tituloVistaAdmin">Vista Administrador</div>
          <div
            className="botomMenuLateral"
            onClick={() => cambiaDatos("profile")}
          >
            Profile
          </div>
          <div
            className="botomMenuLateral"
            onClick={() => cambiaDatos("activeroom")}
          >
            Clases
          </div>
          <div
            className="botomMenuLateral"
            onClick={() => cambiaDatos("joinuser")}
          >
            Reservar
          </div>
          <div
            className="botomMenuLateral"
            onClick={() => cambiaDatos("newroom")}
          >
            Crear Sala
          </div>
          <div
            className="botomMenuLateral"
            onClick={() => cambiaDatos("newcoach")}
          >
            Alta Coach
          </div>
          <div
            className="botomMenuLateral"
            onClick={() => cambiaDatos("newuser")}
          >
            Update Cliente
          </div>
          <div
            className="botomMenuLateral"
            onClick={() => cambiaDatos("codeqr")}
          >
            Acceso GYM
          </div>
        </div>
      </div>
    );
  }
};

export default connect((state) => ({
  credentials: state.credentials,
  tipodatos: state.tipodatos,
}))(Menulateral);
