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
} from "./LoginAndRegister.style";

const Register = () => {
  const navigate: any = useNavigate();
  const [message, setMessage] = useState<string>("");

  const registerForm = (e: any) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/users/register", {
        email: "alexmoreni@email.com",
        name: "Mirella",
        password: "senha123",
      })
      .then(function (response) {
        setMessage(response.data.message);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    if (message === "Cadastrado") {
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
          <ImgEye src={Eye} alt="Mostrar senha" />
        </MessageInput>
        <MessageInput>
          Confirme sua senha
          <Input
            type="password"
            placeholder="Confirme sua senha"
            name="password2"
          />
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
