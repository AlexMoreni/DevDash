import { useEffect, useState } from "react";
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
  ImgEye,
  ButtonSubmit,
  MessageCreateOrLog,
  TextEmphasis,
  ContainerImg,
  ImgBackground,
  ErrorEmail,
  ErrorPassword,
} from "./LoginAndRegister.style";

const Register = () => {
  const navigate: any = useNavigate();
  const [register, setRegister] = useState<string>("");
  const [errorEmail, setErrorEmail] = useState<string>("");
  const [errorPassword, setErrorPassword] = useState<string>("");

  const registerForm = (e: any) => {
    e.preventDefault();
    setErrorEmail("");
    setErrorPassword("");

    axios
      .post("http://localhost:3000/users/register", {
        email: "mirella123@email.com",
        name: "Mirella",
        password: "123",
        confirmPassword: "123",
      })
      .then(function (response) {
        if (response.data.message === "Email já Cadastrado!") {
          setErrorEmail(response.data.message);
          return;
        } else if (response.data.message === "As senhas não conferem!") {
          setErrorPassword(response.data.message);
          return;
        } else {
          setRegister(response.data.message);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    if (register === "Cadastrado") {
      navigate("/login");
    }
  });

  return (
    <Container>
      <FormLogin onSubmit={registerForm}>
        <Title>Registre-se na plataforma</Title>
        <Message>
          Registre-se para começar a construir seus projetos ainda hoje.
        </Message>
        <MessageInput>
          E-mail
          <Input type="text" placeholder="Digite seu email" name="email" />
          {errorEmail && <ErrorEmail>{errorEmail}</ErrorEmail>}
        </MessageInput>
        <MessageInput>
          Nome
          <Input type="text" placeholder="Digite seu nome" name="name" />
        </MessageInput>
        <MessageInput>
          Senha
          <Input
            type="password"
            placeholder="Digite sua senha"
            name="password"
          />
          {errorPassword && <ErrorPassword>{errorPassword}</ErrorPassword>}
          <ImgEye src={Eye} alt="Mostrar senha" />
        </MessageInput>
        <MessageInput>
          Confirme sua senha
          <Input
            type="password"
            placeholder="Confirme sua senha"
            name="confirmPassword"
          />
          {errorPassword && <ErrorPassword>{errorPassword}</ErrorPassword>}
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
