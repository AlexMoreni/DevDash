import { Link } from "react-router-dom";

import {
  ContainerHeader,
  Logo,
  ContainerLinks,
  LinksHeader,
  PhotoProfile,
} from "./NavBar.style";

type Props = {
  logged: boolean;
  photo: string;
  setLogged: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavBar = ({ logged, photo, setLogged }: Props) => {
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
            <LinksHeader>
              <PhotoProfile src={photo} alt="Foto de perfil" />
            </LinksHeader>
          </ContainerLinks>
        </ContainerHeader>
      ) : (
        <ContainerHeader>
          <Link to="/">
            <Logo>DevDash</Logo>
          </Link>
          <ContainerLinks>
            <a href="#project-home">
              <LinksHeader>Projetos</LinksHeader>
            </a>
            <a href="#annotations-home">
              <LinksHeader>Anotações</LinksHeader>
            </a>
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
