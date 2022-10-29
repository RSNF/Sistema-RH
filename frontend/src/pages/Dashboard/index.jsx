import { SideBar } from "../../components/SideBar";
import { Footer } from "../../components/Footer";
import "./style.css";

export const Dashboard = () => {
  return (
    <main className="main-dashboard">
      <SideBar />
      <div className="content">
        <div className="behavior-sliders">
          
        </div>
        <Footer />
      </div>
    </main>
  );
};
