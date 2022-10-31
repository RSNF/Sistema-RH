import { useState } from 'react';
import { SideBar } from "../../components/SideBar";
import { Footer } from "../../components/Footer";
import { Atividade } from "../../components/Atividade";
import "./style.css";
import { Overview } from "../Overview";
import { CadastrarCandidato } from '../Cadastrar Candidato';
import { RevisarCandidato } from '../Revisar Candidato';
import { Configuracoes } from '../Configuracoes';

export const Dashboard = () => {
  const [dashboardContent, setContent] = useState('Overview')

  return (
    <main className="main-dashboard">
      <SideBar  dashboardContent={dashboardContent} setContent={setContent}/>
      <div className="content">
        <h1>{dashboardContent === 'Overview' ? 'Dashboard' : dashboardContent}</h1>
        {dashboardContent === 'Overview' && <Overview/>}
        {dashboardContent === 'Cadastrar candidatos' && <CadastrarCandidato/>}
        {dashboardContent === 'Revisar candidatos' && <RevisarCandidato/>}
        {dashboardContent === 'Configurações' && <Configuracoes/>}
        <Footer />
      </div>
    </main>
  );
};
