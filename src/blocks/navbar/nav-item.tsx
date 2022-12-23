import { useTheme } from "hooks/use-theme";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface NavItemProps {
  title: string;
  href: string;
}

const NavItem: FC<NavItemProps> = ({ title, href }) => {
  const navigate = useNavigate();
  return <li onClick={() => navigate(href)}>{title}</li>;
};

export default NavItem;