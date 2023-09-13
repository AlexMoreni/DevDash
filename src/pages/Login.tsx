import { useState, useEffect, ChangeEvent } from "react";
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
  ErrorEmail,
  ErrorPasswordLogin,
} from "./LoginAndRegister.style";

type Props = {
  logged: boolean;
  setLogged: React.Dispatch<React.SetStateAction<boolean>>;
};

const Login = ({ logged, setLogged }: Props) => {
  const navigate: any = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorEmail, setErrorEmail] = useState<string>("");
  const [errorPassword, setErrorPassword] = useState<string>("");

  const handleLogin = (e: any) => {
    setErrorEmail("");
    setErrorPassword("");
    e.preventDefault();
    axios
      .post("http://localhost:3000/users/login", {
        email,
        password,
      })
      .then((response) => {
        if (response.data.message === "Email não encontrado!") {
          setErrorEmail(response.data.message);
        } else if (response.data.message === "Senha incorreta!") {
          setErrorPassword(response.data.message);
        } else {
          setLogged(true);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
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
          <Input
            type="email"
            placeholder="Digite seu email"
            name="email"
            onChange={handleChange}
          />
          {errorEmail && <ErrorEmail>{errorEmail}</ErrorEmail>}
        </MessageInput>
        <MessageInput>
          Senha
          <Input
            type="password"
            placeholder="Digite sua senha"
            name="password"
            onChange={handleChange}
          />
          <Link to="/">
            <MessageItLost>Esqueceu a senha?</MessageItLost>
          </Link>
          {errorPassword && (
            <ErrorPasswordLogin>{errorPassword}</ErrorPasswordLogin>
          )}
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
