import './style.css'
import { CardVaga } from "../../components/Card Vaga";
import { ContainerOverview } from "../../components/Container Overview";
import { CardCandInfo } from '../../components/Card Cand Info';

export const Overview = () => {
  return (
    <div className="main-content">
      <ContainerOverview title="Atividades Recentes nas Vagas" flexRow={true} >
        <CardVaga title="Designer" dias={5} numCandidatos={10} />
        <CardVaga title="Gerente de Projetos" dias={23} numCandidatos={5} />
      </ContainerOverview>

      <ContainerOverview title="Atividades Recentes nas Vagas" >
        <CardCandInfo nome="João da Silva"  profissao="Operador" />
        <CardCandInfo nome="João da Silva"  profissao="Operador" enviar={true} />
        <CardCandInfo nome="João da Silva"  profissao="Operador" />
      </ContainerOverview>

    </div>
  );
};
