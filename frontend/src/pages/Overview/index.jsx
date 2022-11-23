import './style.css'
import { useEffect } from 'react';
import { CardVaga } from "../../components/Card Vaga";
import { ContainerOverview } from "../../components/Container Overview";
import { CardCandInfo } from '../../components/Card Cand Info';
import { useState } from 'react';
import { useAuth } from '../../contexts/useAuth';

export const Overview = () => {
  const auth = useAuth()
  const [vagas, setVagas] = useState()

  // eslint-disable-next-line 
  async function fetchVagas() {
    const allVagas = await auth.getVagas(2);
    setVagas(allVagas.data)
  }

  useEffect(() => {
    // eslint-disable-next-line 
    fetchVagas()
  }, [])

  return (
    <div className="main-content">
      <ContainerOverview title="Atividades Recentes nas Vagas" flexRow={true} >
        {vagas && vagas.map(vaga => <CardVaga title={vaga.titulo} date={vaga.created_at} numCandidatos={vaga.candidatos.length} />)}
       
      </ContainerOverview>

      <ContainerOverview title="Avaliações pendentes" >
        <CardCandInfo nome="João da Silva"  profissao="Operador" />
        <CardCandInfo nome="João da Silva"  profissao="Operador" enviar={true} />
        <CardCandInfo nome="João da Silva"  profissao="Operador" />
      </ContainerOverview>

    </div>
  );
};
