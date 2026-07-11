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
              className={({ isActive }) =>
                `flex items-center gap-2 rounded-full p-2 font-semibold transition-colors duration-200
              ${
                isActive
                  ? "bg-[#2D5A27] text-[#f9faf6]"
                  : "text-[#44556f] hover:bg-[#eaeee9]"
              }`
              }
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
