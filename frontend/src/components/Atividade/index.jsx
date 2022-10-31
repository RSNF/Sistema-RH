import "./style.css";

export const Atividade = ({ href, text, target }) => {
  return (
    <section className="atividades">
      <section className="atividades-vagas">
        <div className="text-principal">
          <h3 className="text-font">Atividades Recentes nas Vagas</h3>
        </div>
        <div className="item">
          <h4 className="text-font">Gerente de Projetos</h4>
          <div className="text-item">
            <p className="text-font">Aberto há 23 dias</p>
            <p className="text-font">Candidatos: 6</p>
          </div>
          <div className="acesso">
            <p className="text-font">Acessar</p>
          </div>
        </div>

        <div className="item">
          <h4 className="text-font">Designer</h4>
          <div className="text-item">
            <p className="text-font">Aberto há 23 dias</p>
            <p className="text-font">Candidatos: 6</p>
            <p className="acesso">Acessar</p>
          </div>
        </div>
      </section>
    </section>
  );
};
