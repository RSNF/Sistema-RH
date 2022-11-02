import "./style.css";
import { FiUser, FiClock } from "react-icons/fi";

export const Atividade = ({ href, text, target }) => {
  return (
    <div className="container">
      <section className="atividades">
        <section className="atividades-grid item1">
          <div className="text-principal">
            <h3 className="text-font">Atividades Recentes nas Vagas</h3>
          </div>
        </section>

        <section className="atividades-grid ">
          <div className="text-principal">
            <h3 className="text-font">Avaliações Pendentes</h3>
          </div>
          <div className="contantes-item">
            <div className="pendente-item">
              <span className="icon-FiUser">
                <FiUser />
              </span>
              <span>
                <p>João da Silva</p>
              </span>
              <span>
                <p>Operador</p>
              </span>

              <button className="button-atv">
                <span className="icon-fiClock">
                  <FiClock />
                </span>
                Reenviar
              </button>
            </div>

            <div className="pendente-item">
              <span className="icon-FiUser">
                <FiUser />
              </span>
              <span>
                <p>João da Silva</p>
              </span>
              <span>
                <p>Operador</p>
              </span>

              <button className="button-atv">
                <span className="icon-fiClock">
                  <FiClock />
                </span>
                Reenviar
              </button>
            </div>
            <div className="pendente-item">
              <span className="icon-FiUser">
                <FiUser />
              </span>
              <span>
                <p>João da Silva</p>
              </span>
              <span>
                <p>Operador</p>
              </span>

              <button className="button-atv">
                <span className="icon-fiClock">
                  <FiClock />
                </span>
                Reenviar
              </button>
            </div>

            <div className="pendente-item">
              <span className="icon-FiUser">
                <FiUser />
              </span>
              <span>
                <p>João da Silva</p>
              </span>
              <span>
                <p>Operador</p>
              </span>

              <button className="button-atv">
                <span className="icon-fiClock">
                  <FiClock />
                </span>
                Reenviar
              </button>
            </div>
          </div>
          <div className="ver-pendente">
            <h5>VER TODAS</h5>
          </div>
        </section>

        <section className="atividades-grid item3">
          <div className="text-principal">
            <h3 className="text-font">Finalizados recentemente</h3>
          </div>
          <div className="contantes-item">
            <div className="pendente-item">
              <span className="icon-FiUser">
                <FiUser />
              </span>
              <span>
                <p>João da Silva</p>
              </span>
              <span>
                <p>Operador</p>
              </span>

              <button className="button-atv">
                <span className="icon-fiClock">
                  <FiClock />
                </span>
                Reenviar
              </button>
            </div>

            <div className="pendente-item">
              <span className="icon-FiUser">
                <FiUser />
              </span>
              <span>
                <p>João da Silva</p>
              </span>
              <span>
                <p>Operador</p>
              </span>

              <button className="button-atv">
                <span className="icon-fiClock">
                  <FiClock />
                </span>
                Reenviar
              </button>
            </div>

            <div className="pendente-item">
              <span className="icon-FiUser">
                <FiUser />
              </span>
              <span>
                <p>João da Silva</p>
              </span>
              <span>
                <p>Operador</p>
              </span>

              <button className="button-atv">
                <span className="icon-fiClock">
                  <FiClock />
                </span>
                Reenviar
              </button>
            </div>

            <div className="pendente-item">
              <span className="icon-FiUser">
                <FiUser />
              </span>
              <span>
                <p>João da Silva</p>
              </span>
              <span>
                <p>Operador</p>
              </span>

              <button className="button-atv">
                <span className="icon-fiClock">
                  <FiClock />
                </span>
                Reenviar
              </button>
            </div>
          </div>
          <div className="ver-pendente">
            <h5>VER TODAS</h5>
          </div>
        </section>

        <section className="atividades-grid item4">
          <div className="text-principal">
            <h3 className="text-font">Finalizados recentemente</h3>
          </div>
          <div className="contantes-item">
            <div className="pendente-item">
              <span className="icon-FiUser">
                <FiUser />
              </span>
              <span>
                <p>João da Silva</p>
              </span>
              <span>
                <p>Operador</p>
              </span>

              <button className="button-atv">
                <span className="icon-fiClock">
                  <FiClock />
                </span>
                Reenviar
              </button>
            </div>

            <div className="pendente-item">
              <span className="icon-FiUser">
                <FiUser />
              </span>
              <span>
                <p>João da Silva</p>
              </span>
              <span>
                <p>Operador</p>
              </span>

              <button className="button-atv">
                <span className="icon-fiClock">
                  <FiClock />
                </span>
                Reenviar
              </button>
            </div>

            <div className="pendente-item">
              <span className="icon-FiUser">
                <FiUser />
              </span>
              <span>
                <p>João da Silva</p>
              </span>
              <span>
                <p>Operador</p>
              </span>

              <button className="button-atv">
                <span className="icon-fiClock">
                  <FiClock />
                </span>
                Reenviar
              </button>
            </div>

            <div className="pendente-item">
              <span className="icon-FiUser">
                <FiUser />
              </span>
              <span>
                <p>João da Silva</p>
              </span>
              <span>
                <p>Operador</p>
              </span>

              <button className="button-atv">
                <span className="icon-fiClock">
                  <FiClock />
                </span>
                Reenviar
              </button>
            </div>
          </div>
          <div className="ver-pendente">
            <h5>VER TODAS</h5>
          </div>
        </section>
      </section>
    </div>
  );
};
