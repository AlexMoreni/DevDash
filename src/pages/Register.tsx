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
  ImgEye,
  ButtonSubmit,
  MessageCreateOrLog,
  TextEmphasis,
  ContainerImg,
  ImgBackground,
} from "./LoginAndRegister.style";

const Register = () => {
  return (
    <Container>
      <FormLogin action="/seu-endpoint-de-acao" method="POST">
        <Title>Registre-se na plataforma</Title>
        <Message>
          Registre-se para começar a construir seus projetos ainda hoje.
        </Message>
        <MessageInput>
          E-mail
          <Input type="text" placeholder="Digite seu email" />
        </MessageInput>
        <MessageInput>
          Nome
          <Input type="text" placeholder="Digite seu nome" />
        </MessageInput>
        <MessageInput>
          Senha
          <Input type="password" placeholder="Digite sua senha" />
          <ImgEye src={Eye} alt="Mostrar senha" />
        </MessageInput>
        <MessageInput>
          Confirme sua senha
          <Input type="password" placeholder="Confirme sua senha" />
          <ImgEye src={Eye} alt="Mostrar senha" />
        </MessageInput>
        <ButtonSubmit type="submit" value="Cadastrar" />
        <MessageCreateOrLog>
          Já tem uma conta?{" "}
          <Link to="/register">
            <TextEmphasis>Login</TextEmphasis>
          </Link>
        </MessageCreateOrLog>
      </FormLogin>
      <ContainerImg>
        <ImgBackground src={Rectangle} alt="retangulo" />
      </ContainerImg>
    </Container>
  );
};

export default Register;
