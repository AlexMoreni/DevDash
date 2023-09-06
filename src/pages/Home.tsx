//Estilos
import {
  Container,
  ContentHome,
  Title,
  Emphasis,
  Text,
  Button,
} from "./Home.style";

//Imagens
import ImgHome from "../../public/img-home.png";

const Home = () => {
  return (
    <>
      <Container>
        <ContentHome>
          <Title>
            Bem-vindo ao <Emphasis>DevDash</Emphasis>
          </Title>
          <Text>
            O lugar perfeito para programadores e desenvolvedores acompanharem o
            progresso dos seus trabalhos e projetos.
          </Text>
          <Button>Criar projeto</Button>
          <img src={ImgHome} alt="img-programmer" />
        </ContentHome>
      </Container>
    </>
  );
};

export default Home;
