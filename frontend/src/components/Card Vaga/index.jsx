import "./style.css";
import ReactTimeAgo from 'react-time-ago';
import { FiUser, FiClock } from "react-icons/fi";

export const CardVaga = (props) => {
  return (
    <div className="card-container">
      <h4 id="title-vaga">{props.title}</h4>
      <div id="vaga-info">
        <div id="row-vaga-info">
          <FiClock />
          <p>Aberto <ReactTimeAgo date={Date.parse(props.date)} /> </p>
        </div>
        <div id="row-vaga-info">
          <FiUser />
          <p>Candidatos: {props.numCandidatos}</p>
        </div>
      </div>

      <button className="button-acess" onClick={props.onClick}>
        Acessar
      </button>
    </div>
  );
};
