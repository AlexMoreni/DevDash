//Estilos
import {
  Container,
  ContentHome,
  Title,
  Emphasis,
  Text,
  Button,
  ContentHomeSide,
  ContentColum,
} from "./Home.style";

//Imagens
import ImgHome from "../../public/img-home.png";
import ImgHomeProjects from "../../public/img-home-projects.png";
import ImgHomeAnnotations from "../../public/img-home-annotations.png";

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
        <ContentHomeSide>
          <ContentColum>
            <Title>
              Seus projetos com <Emphasis>DevDash</Emphasis>
            </Title>
            <Text>
              Você já teve uma ideia brilhante, mas ficou perdido(a) na hora de
              transformá-la em realidade? Ou talvez você seja um visionário em
              busca de um lugar onde suas ideias possam florescer e se
              transformar em projetos reais. Seja qual for o seu caso, você está
              no lugar certo!
            </Text>
          </ContentColum>
          <ContentColum>
            <img src={ImgHomeProjects} />
            <Button>Criar projeto</Button>
          </ContentColum>
        </ContentHomeSide>
        <ContentHomeSide>
          <ContentColum>
            <Title>
              Suas anotações com <Emphasis>DevDash</Emphasis>
            </Title>
            <Text>
              Seja você um estudante, um profissional ou apenas alguém que gosta
              de manter suas ideias organizadas, as anotações desempenham um
              papel fundamental em nossa vida cotidiana. No entanto, criar
              anotações no nosso site vai além de simplesmente fazer anotações;
              é uma maneira de aprimorar sua produtividade e aproveitar ao
              máximo seu tempo online.
            </Text>
          </ContentColum>
          <ContentColum>
            <img src={ImgHomeAnnotations} />
            <Button>Criar projeto</Button>
          </ContentColum>
        </ContentHomeSide>
      </Container>
    </>
  );
};

export default Home;
