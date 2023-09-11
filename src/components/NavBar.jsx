import { Link } from "react-router-dom";

import {
  ContainerHeader,
  Logo,
  ContainerLinks,
  LinksHeader,
} from "./NavBar.style";

const NavBar = () => {
  return (
    <ContainerHeader>
      <Link to="/">
        <Logo>DevDash</Logo>
      </Link>
      <ContainerLinks>
        <Link to="#">
          <LinksHeader>Projetos</LinksHeader>
        </Link>
        <LinksHeader>Anotações</LinksHeader>
        <Link to="/login">
          <LinksHeader>Login</LinksHeader>
        </Link>
      </ContainerLinks>
    </ContainerHeader>
  );
};

export default NavBar;
