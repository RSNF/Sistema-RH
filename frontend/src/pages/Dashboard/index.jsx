import { useState } from "react";
import "./style.css";
import { SideBar } from "../../components/SideBar";
import { Overview } from "../Overview";
import { CadastrarCandidato } from "../Cadastrar Candidato";
import { RevisarCandidato } from "../Revisar Candidato";
import { Configuracoes } from "../Configuracoes";
import { Footer } from "../../components/Footer";
import { Vagas } from "../Vagas";

export const Dashboard = () => {
  const [dashboardContent, setContent] = useState("Overview");

  return (
    <main className="main-dashboard">
      <SideBar dashboardContent={dashboardContent} setContent={setContent} />
      <div className="content">
        <div>
          <h1>
            {dashboardContent === "Overview" ? "Dashboard" : dashboardContent}
          </h1>
          {dashboardContent === "Overview" && <Overview />}
          {dashboardContent === "Cadastrar candidatos" && (
            <CadastrarCandidato />
          )}
          {dashboardContent === "Revisar candidatos" && <RevisarCandidato />}
          {dashboardContent === "Configurações" && <Configuracoes />}
          
          {(
              dashboardContent === "Criar vaga" ||
              dashboardContent === "Objetivos da vaga" ||
              dashboardContent === "Adicionar candidatos"
            ) && (
              <Vagas
                dashboardContent={dashboardContent}
                setContent={setContent}
              />
            )}
        </div>
        <Footer />
      </div>
    </main>
  );
};
