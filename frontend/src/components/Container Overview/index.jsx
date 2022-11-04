import "./style.css";
import { Link } from "../Link";

export const ContainerOverview = (props) => {
  

  return (
    <div className="container">
      <h3 id="container-title">{props.title}</h3>
      <div id="container-content" className={props.flexRow ? "container-content-row" : "container-content-column"}>{props.children}</div>
      <Link text="VER TODOS" id="container-link" />
    </div>
  );
};
