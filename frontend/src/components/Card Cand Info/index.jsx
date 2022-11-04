import "./style.css";
import { FiUser, FiClock, FiSend } from "react-icons/fi";

export const CardCandInfo = (props) => {
  return (
    <div className="cand-info-content">
      <FiUser />
      <span>{props.nome}</span>
      <span>{props.profissao}</span>
      <button
        onClick={props.onClick}
        className={props.enviar ? "btn-enviar" : "btn-reenviar"}
      >
        {props.enviar ? (
          <div>
            <FiSend /> <span>Enviar</span>
          </div>
        ):(
          <div>
            <FiClock /> <span>Reenviar</span>
          </div>
        )}
      </button>
    </div>
  );
};
