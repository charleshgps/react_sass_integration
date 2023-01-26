import SocialNetworks from "./SocialNetworks";
import InformationContainer from "./InformationContainer";

import Avatar from "../img/eu.png";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Charles Silva" />
      <p className="title"> Desenvolvedor </p>
      <SocialNetworks />
      <InformationContainer />
      <a href="" className="btn">
        Download Curriculo
      </a>
    </aside>
  );
};

export default Sidebar;
