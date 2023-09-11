import { Link } from "react-router-dom";

import Rectangle from "../../public/rectangle-login.png";
import Eye from "../../public/eye-off.png";

import {
  Container,
  FormLogin,
  Title,
  Message,
  MessageInput,
  Input,
  MessageItLost,
  ImgEye,
  ButtonSubmit,
  MessageCreateOrLog,
  TextEmphasis,
  ContainerImg,
  ImgBackground,
} from "./LoginAndRegister.style";

const Login = () => {
  return (
    <Container>
      <FormLogin action="/seu-endpoint-de-acao" method="POST">
        <Title>Acesse a plataforma</Title>
        <Message>
          Faça login ou registre-se para começar a construir seus projetos ainda
          hoje.
        </Message>
        <MessageInput>
          E-mail
          <Input type="text" placeholder="Digite seu email" />
        </MessageInput>
        <MessageInput>
          Senha
          <Input type="password" placeholder="Digite seu email" />
          <Link to="/">
            <MessageItLost>Esqueceu a senha?</MessageItLost>
          </Link>
          <ImgEye src={Eye} alt="Mostrar senha" />
        </MessageInput>
        <ButtonSubmit type="submit" value="Entrar" />
        <MessageCreateOrLog>
          Ainda não tem uma conta?{" "}
          <Link to="/register">
            <TextEmphasis>Inscreva-se</TextEmphasis>
          </Link>
        </MessageCreateOrLog>
      </FormLogin>
      <ContainerImg>
        <ImgBackground src={Rectangle} alt="retangulo" />
      </ContainerImg>
    </Container>
  );
};

export default Login;
