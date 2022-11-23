import { CriarVaga } from "../Criar Vaga";
import { ObjetivosVaga } from "../Objetivos Vaga";
import { AdicionarCandidatos } from "../Adicionar Candidatos";
import { useState } from "react";

export const Vagas = ({ dashboardContent, setContent }) => {
  const [firstStepData, setFirstStepData] = useState({
    titulo: "",
    descricao: "",
  });
  const [secoundStepData, setSecoundStepData] = useState({
    colOrInd: 2,
    resOrSoc: 2,
    IntOrPac: 2,
    ImpOrVig: 2,
  });

  return (
    <div>
        {dashboardContent === "Criar vaga" && (
          <CriarVaga
            setContent={setContent}
            stepData={firstStepData}
            setStepData={setFirstStepData}
          />
        )}
        {dashboardContent === "Objetivos da vaga" && (
          <ObjetivosVaga
            setContent={setContent}
            stepData={secoundStepData}
            setStepData={setSecoundStepData}
          />
        )}
        {dashboardContent === "Adicionar candidatos" && (
          <AdicionarCandidatos
            firstStepData={firstStepData}
            secoundStepData={secoundStepData}
            setContent={setContent}
          />
        )}
    </div>
  );
};
