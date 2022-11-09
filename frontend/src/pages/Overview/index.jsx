import './style.css'
import { useEffect } from 'react';
import api from '../../services/api'
import { CardVaga } from "../../components/Card Vaga";
import { ContainerOverview } from "../../components/Container Overview";
import { CardCandInfo } from '../../components/Card Cand Info';
import { useState } from 'react';

export const Overview = () => {

  const [vagas, setVagas] = useState()

  async function fetchVagas() {
    const allVagas = await api.get('/vagas');
    setVagas(allVagas.data)
  }

  useEffect(() => {
    fetchVagas()
  }, [vagas])

  return (
    <div className="main-content">
      <ContainerOverview title="Atividades Recentes nas Vagas" flexRow={true} >
        {vagas && <CardVaga title={vagas[0].titulo} date={vagas[0].created_at} numCandidatos={vagas[0].candidatos.length} />}
        {vagas && (vagas.lenght > 1 ? (<CardVaga title={vagas[1].titulo} date={vagas[1].created_at} numCandidatos={vagas[1].candidatos.length} />) : null)}
      </ContainerOverview>

      <ContainerOverview title="Atividades Recentes nas Vagas" >
        <CardCandInfo nome="João da Silva"  profissao="Operador" />
        <CardCandInfo nome="João da Silva"  profissao="Operador" enviar={true} />
        <CardCandInfo nome="João da Silva"  profissao="Operador" />
      </ContainerOverview>

    </div>
  );
};
