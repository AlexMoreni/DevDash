import {
  ContainerHeader,
  Logo,
  ContainerLinks,
  LinksHeader,
} from "./NavBar.style";

const NavBar = () => {
  return (
    <ContainerHeader>
      <Logo>DevDash</Logo>
      <ContainerLinks>
        <LinksHeader href="#">Projetos</LinksHeader>
        <LinksHeader href="#">Anotações</LinksHeader>
        <LinksHeader href="#">Login</LinksHeader>
      </ContainerLinks>
    </ContainerHeader>
  );
};

export default NavBar;
