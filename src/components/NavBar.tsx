import { Link } from "react-router-dom";

import {
  ContainerHeader,
  Logo,
  ContainerLinks,
  LinksHeader,
} from "./NavBar.style";

type Props = {
  logged: boolean;
  setLogged: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavBar = ({ logged, setLogged }: Props) => {
  return (
    <>
      {logged ? (
        <ContainerHeader>
          <Link to="/">
            <Logo>DevDash</Logo>
          </Link>
          <ContainerLinks>
            <Link to="#">
              <LinksHeader>Projetos</LinksHeader>
            </Link>
            <LinksHeader>Anotações</LinksHeader>
            <LinksHeader
              onClick={() => {
                setLogged(false);
              }}
            >
              Sair
            </LinksHeader>
            <LinksHeader>Foto</LinksHeader>
          </ContainerLinks>
        </ContainerHeader>
      ) : (
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
      )}
    </>
  );
};

export default NavBar;
