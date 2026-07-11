import { NavLink } from "react-router-dom";

import logo from "../assets/LogoEco-comunidade.png";
import { Home, Camera, Lightbulb, MapPin, Info } from "lucide-react";

const Header = () => {
  const links = [
    { to: "/", text: "Início", Icon: Home },
    { to: "/scanner", text: "Scanner", Icon: Camera },
    { to: "/diy", text: "DIY", Icon: Lightbulb },
    { to: "/coleta", text: "Coleta", Icon: MapPin },
    { to: "/about", text: "Sobre", Icon: Info },
  ];

  return (
    <nav className="flex items-center justify-between gap-8 bg-[#f9f9f6] px-4">
      <div className="flex items-center text-[#2d5a27]">
        <img src={logo} alt="Logo da Eco-Comunidade" className="w-12" />
        <NavLink to="/" className="text-2xl font-black">
          EcoComunidade
        </NavLink>
      </div>

      <ul className="flex gap-4">
        {links.map(({ to, text, Icon }) => (
          <li key={to}>
            <NavLink
              to={to}
              className="flex items-center p-1 gap-2 text-[#44556f] font-semibold rounded-full p-2 hover:bg-[#eaeee9]"
            >
              <Icon size={18} />
              <span>{text}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
