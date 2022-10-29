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
import  { useNavigate } from 'react-router-dom';
import  { useAuth } from '../../contexts/useAuth';

import { CgProfile } from "react-icons/cg";

export const SideBar = () => {
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
    const sidebar = document.getElementById('sidebar');
		const subMenu = document.getElementById('sub-menu');
		const dropdownIcon = document.getElementById('dropdown').lastChild.firstChild;

		if(subMenu.style.display === 'none'){
			subMenu.style.display = 'flex';

      if(window.matchMedia('min-width: 1080px')){
        sidebar.style.width = '200px'
      }

			window.setTimeout(function(){
				subMenu.style.opacity = '1';
				dropdownIcon.style.transform = 'rotate(180deg)';
			},0);

		} else {
			subMenu.style.opacity = '0';
			dropdownIcon.style.transform = 'rotate(0deg)';
			window.setTimeout(function(){
				subMenu.style.display = 'none';
        if(window.matchMedia('min-width: 1080px')){
          sidebar.style.width = '80px'
        }
			},300);
		}
	}

  return (
    <div className="sidebar" id="sidebar">
      <div className="nav-logo">
        <Logo width={50} height={24} />
        <h1>Sistema RH</h1>
      </div>
      <h2>Menu</h2>
      <ul>
        <li
          onClick={() => {
            console.log("aaa");
          }}
        >
          <div className="menu-item">
            <FiPieChart />
            <span>Overview</span>
          </div>
        </li>

        <li>
          <div className="menu-item">
            <FiUser />
            <span>Cadastrar candidatos</span>
          </div>
        </li>

        <li>
          <div className="menu-item">
            <FiFolder />
            <span>Revisar candidatos</span>
          </div>
        </li>

        <li>
          <div className="menu-item" id="dropdown" onClick={() => {showSubMenu()}}>
            <FiUsers />
            <span>Vagas</span>
            <i>
							<FiChevronDown className="dropdown-icon"/>
						</i>
          </div>
          <div className="sub-menu-item" id="sub-menu">
            <ul>
              <li>
                <span>Criar vaga</span>
              </li>
              <li>
                <span>Objetivos da vaga</span>
              </li>
              <li>
                <span>Adicionar candidatos</span>
              </li>
            </ul>
          </div>
        </li>

        <li>
          <div className="menu-item">
            <FiSettings />
            <span>Configurações</span>
          </div>
        </li>
      </ul>

      <hr />

			<h2>Profile</h2>
			<div className="div-profile">
				<CgProfile/>
				<span>
					<strong>{auth && auth?.user?.nome}</strong>
					<p>{auth && auth?.user?.email}</p>
				</span>
			</div>

      <button className="logout-btn" onClick={() => {handleSingnOut()}} >
          <FiLogOut id="logout-icon" /> 
          <span>Sair</span>
      </button>

    </div>
  );
};
