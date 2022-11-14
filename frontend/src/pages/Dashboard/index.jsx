import { useState } from 'react';
import "./style.css";
import { SideBar } from "../../components/SideBar";
import { Overview } from "../Overview";
import { CadastrarCandidato } from '../Cadastrar Candidato';
import { RevisarCandidato } from '../Revisar Candidato';
import { Configuracoes } from '../Configuracoes';
import { Footer } from "../../components/Footer";
import { CriarVaga } from '../Criar Vaga';
import { ObjetivosVaga } from '../Objetivos Vaga';
import { AdicionarCandidatos } from '../Adicionar Candidatos';

export const Dashboard = () => {
  const [dashboardContent, setContent] = useState('Overview')

  return (
    <main className="main-dashboard">
      <SideBar  dashboardContent={dashboardContent} setContent={setContent}/>
      <div className="content">
        <div>
          <h1>{dashboardContent === 'Overview' ? 'Dashboard' : dashboardContent}</h1>
          {dashboardContent === 'Overview' && <Overview/>}
          {dashboardContent === 'Cadastrar candidatos' && <CadastrarCandidato/>}
          {dashboardContent === 'Revisar candidatos' && <RevisarCandidato/>}
          {dashboardContent === 'Configurações' && <Configuracoes/>}
          {dashboardContent === 'Criar vaga' && <CriarVaga/>}
          {dashboardContent === 'Objetivos da vaga' && <ObjetivosVaga/>}
          {dashboardContent === 'Adicionar candidatos' && <AdicionarCandidatos/>}
        </div>
        <Footer />
      </div>
      
    </main>
    
  );
};
