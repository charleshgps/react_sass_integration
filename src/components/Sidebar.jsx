import Avatar from "../img/eu.png";
import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Charles Silva" />
      <p className="title"> Desenvolvedor </p>
      <p>Redes sociais</p>
      <p>Informações de contato</p>
      <a href="" className="">
        Download Curriculo
      </a>
    </aside>
  );
};

export default Sidebar;
