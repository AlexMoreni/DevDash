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
            <Link to="/notes">
              <LinksHeader>Anotações</LinksHeader>
            </Link>
            <Link to="/">
              <LinksHeader
                onClick={() => {
                  setLogged(false);
                }}
              >
                Sair
              </LinksHeader>
            </Link>
            <LinksHeader>
              <Link to="/edit">
                <PhotoProfile src={photo} />
              </Link>
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
