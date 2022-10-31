import "./style.css";
import { Logo } from "../Svg";
import {
  FiPieChart,
  FiUser,
  FiUsers,
  FiFolder,
  FiSettings,
  FiChevronDown,
  FiLogOut,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/useAuth";
import { useEffect } from "react";
import { CgProfile } from "react-icons/cg";

export const SideBar = ({ dashboardContent, setContent }) => {
  const auth = useAuth();

  const navigate = useNavigate();
  async function handleSingnOut() {
    try {
      await auth.logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  function showSubMenu() {
    const sidebar = document.getElementById("sidebar");
    const subMenu = document.getElementById("sub-menu");
    const dropdownIcon =
      document.getElementById("dropdown").lastChild.firstChild;

    if (subMenu.style.display === "none") {
      subMenu.style.display = "flex";

      if (window.matchMedia("min-width: 1080px")) {
        sidebar.style.width = "300px";
      }

      window.setTimeout(function () {
        subMenu.style.opacity = "1";
        dropdownIcon.style.transform = "rotate(180deg)";
      }, 0);
    } else {
      subMenu.style.opacity = "0";
      dropdownIcon.style.transform = "rotate(0deg)";
      window.setTimeout(function () {
        subMenu.style.display = "none";
        if (window.matchMedia("min-width: 1080px")) {
          sidebar.style.width = "80px";
        }
      }, 300);
    }
  }

  useEffect(() => {
    menuItemSelected();
    subMenuItemSelected();
  }, []);

  function menuItemSelected() {
    const list = document.getElementById('sidebar-list');
    var items = [];

    items = list.childNodes;

    for(let i = 0; i < items.length; i++) {
      if(i !== 3){
        items[i].onclick = function(){
          setContent(this.childNodes[0].children[1].innerHTML)
       };
      } 
    }
  }

  function subMenuItemSelected() {
    const list = document.getElementById('sub-menu-list');
    var items = [];
    items = list.childNodes;

    for(let i = 0; i < items.length; i++) {
      items[i].onclick = function(){
        setContent(this.children[0].innerHTML)
      }
    }
  }

  return (
    <div className="sidebar" id="sidebar">

      <div className="nav-logo">
        <Logo width={50} height={24} />
        <h1>Sistema RH</h1>
      </div>
      <h2>Menu</h2>

      <ul id="sidebar-list">

        <li>
          <div className="menu-item" id={dashboardContent === 'Overview' ? "selected" : ""}>
            <FiPieChart />
            <span>Overview</span>
          </div>
        </li>

        <li>
          <div className="menu-item" id={dashboardContent === 'Cadastrar candidatos' ? "selected" : ""}>
            <FiUser />
            <span>Cadastrar candidatos</span>
          </div>
        </li>

        <li>
          <div className="menu-item" id={dashboardContent === 'Revisar candidatos' ? "selected" : ""}>
            <FiFolder />
            <span>Revisar candidatos</span>
          </div>
        </li>

        <li>
          <div className="menu-item" id="dropdown" onClick={showSubMenu}>
            <FiUsers />
            <span>Vagas</span>
            <i>
              <FiChevronDown className="dropdown-icon" />
            </i>
          </div>
          <div className="sub-menu-item" id="sub-menu">
            <ul id="sub-menu-list">
              <li id={dashboardContent === 'Criar vaga' ? "selected" : ""}>
                <span >Criar vaga</span>
              </li>
              <li id={dashboardContent === 'Objetivos da vaga' ? "selected" : ""}>
                <span >Objetivos da vaga</span>
              </li>
              <li id={dashboardContent === 'Adicionar candidatos' ? "selected" : ""}>
                <span >Adicionar candidatos</span>
              </li>
            </ul>
          </div>
        </li>

        <li>
          <div className="menu-item" id={dashboardContent === 'Configurações' ? "selected" : ""}>
            <FiSettings />
            <span>Configurações</span>
          </div>
        </li>

      </ul>

      <hr />

      <h2>Profile</h2>
      <div className="div-profile">
        <CgProfile />
        <span>
          <strong>{auth && auth?.user?.nome}</strong>
          <p>{auth && auth?.user?.email}</p>
        </span>
      </div>

      <button
        className="logout-btn"
        onClick={() => {
          handleSingnOut();
        }}
      >
        <FiLogOut id="logout-icon" />
        <span>Sair</span>
      </button>
    </div>
  );
};
