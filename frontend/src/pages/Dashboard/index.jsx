import { SideBar } from "../../components/SideBar";
import { Footer } from "../../components/Footer";
import { Atividade } from "../../components/Atividade";
import "./style.css";

export const Dashboard = () => {
  return (
    <main className="main-dashboard">
      <SideBar />
      <div className="content">
        <Atividade />
      </div>
    </main>
  );
};
