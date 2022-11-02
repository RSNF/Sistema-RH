import "./style.css";
import { FiUser, FiClock } from "react-icons/fi";
import { BiPieChartAlt } from "react-icons/bi";

export const Atividade = ({ href, text, target }) => {
  return (
    <div className="container">
      <section className="atividades">
        <section className="atividades-grid item1">
          <div className="text-principal">
            <h3 className="text-font">Atividades Recentes nas Vagas</h3>
          </div>
          <div className="grid__container">
            <div className="grid__container__item">
              <h4 className="grid__text">Gerente de Projetos</h4>
              <div className="container__item__lab">
                <span className="container__item__icons">
                  <BiPieChartAlt />
                </span>
                <span className="container__item__text">
                  <p>Aberto há 23 dias</p>
                </span>
              </div>
              <div className="container__item__lab">
                <span className="container__item__icons2">
                  <FiUser />
                </span>
                <span className="container__item__text">
                  <p>Candidatos: 6</p>
                </span>
              </div>
              <div className="container__item__button">
                <button className="container__item__button__acess">
                  Acessar
                </button>
              </div>
            </div>

            <div className="grid__container__item">
              <h4 className="grid__text">Designer</h4>
              <div className="container__item__lab">
                <span className="container__item__icons">
                  <BiPieChartAlt />
                </span>
                <span className="container__item__text">
                  <p>Aberto há 2 dias</p>
                </span>
              </div>
              <div className="container__item__lab">
                <span className="container__item__icons2">
                  <FiUser />
                </span>
                <span className="container__item__text">
                  <p>Candidatos: 5</p>
                </span>
              </div>
              <div className="container__item__button">
                <button className="container__item__button__acess">
                  Acessar
                </button>
              </div>
            </div>
          </div>
          <div className="grid__container__footer">
            <button className="container__button__footer">VER TODAS</button>
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
