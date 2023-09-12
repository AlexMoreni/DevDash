import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

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

type Props = {
  logged: boolean;
  setLogged: React.Dispatch<React.SetStateAction<boolean>>;
};

const Login = ({ logged, setLogged }: Props) => {
  const navigate: any = useNavigate();
  const [message, setMessage] = useState<string>("");

  const handleLogin = (e: any) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/users/login", {
        email: "mirdella@email.com",
        password: "senha123",
      })
      .then((response) => {
        setMessage(response.data.message);
        setLogged(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    if (logged) {
      navigate("/");
    }
  });

  return (
    <Container>
      <FormLogin onSubmit={handleLogin}>
        <Title>Acesse a plataforma</Title>
        <Message>
          Faça login ou registre-se para começar a construir seus projetos ainda
          hoje.
        </Message>
        <MessageInput>
          E-mail
          <Input type="text" placeholder="Digite seu email" name="email" />
        </MessageInput>
        <MessageInput>
          Senha
          <Input
            type="password"
            placeholder="Digite sua senha"
            name="password"
          />
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
