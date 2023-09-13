import { Link } from "react-router-dom";

import Img404 from "../../public/img-404.png";

import { Container, Title, Text, ButtonHome } from "./Page404.style";

const Page404 = () => {
  return (
    <Container>
      <div>
        <Title>Ops, esta página não foi encontrada</Title>
        <Text>
          Parece que você se perdeu... Tente voltar para a página anterior ou
          acessar a home.
        </Text>
        <Link to="/">
          <ButtonHome>Ir para home</ButtonHome>
        </Link>
      </div>
      <div>
        <img src={Img404} alt="Imagem 404" />
      </div>
    </Container>
  );
};

export default Page404;
