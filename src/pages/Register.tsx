import { useEffect, useState, ChangeEvent, useRef } from "react";
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
  ErrorName,
  ErrorPassword,
} from "./LoginAndRegister.style";

const Register = () => {
  const navigate: any = useNavigate();
  const [register, setRegister] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [errorEmail, setErrorEmail] = useState<string>("");
  const [errorName, setErrorName] = useState<string>("");
  const [errorPassword, setErrorPassword] = useState<string>("");
  const inputRefRegister = useRef<HTMLInputElement | null>(null);
  const inputRefConfirm = useRef<HTMLInputElement | null>(null);

  const registerForm = (e: any) => {
    e.preventDefault();
    setErrorEmail("");
    setErrorPassword("");
    setErrorName("");

    axios
      .post("http://localhost:3000/users/register", {
        email,
        name,
        password,
        confirmPassword,
      })
      .then(function (response) {
        if (response.data.message === "Email já Cadastrado!") {
          setErrorEmail(response.data.message);
          return;
        } else if (
          response.data.message === "Email com caracteres insuficiente!"
        ) {
          setErrorEmail(response.data.message);
          return;
        } else if (
          response.data.message === "Email com padrão invalido, inclua @"
        ) {
          setErrorEmail(response.data.message);
          return;
        } else if (response.data.message === "Insira apenas letras no nome!") {
          setErrorName(response.data.message);
          return;
        } else if (response.data.message === "Nome com tamanho inválido!") {
          setErrorName(response.data.message);
          return;
        } else if (response.data.message === "Mínimo 5 caracteres!") {
          setErrorPassword(response.data.message);
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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    } else if (e.target.name === "confirmPassword") {
      setConfirmPassword(e.target.value);
    }
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
          <Input
            type="text"
            placeholder="Ex: name@example.com"
            name="email"
            onChange={handleChange}
          />
          {errorEmail && <ErrorEmail>{errorEmail}</ErrorEmail>}
        </MessageInput>
        <MessageInput>
          Nome
          <Input
            type="text"
            placeholder="Digite seu nome"
            name="name"
            onChange={handleChange}
          />
          {errorName && <ErrorName>{errorName}</ErrorName>}
        </MessageInput>
        <MessageInput>
          Senha
          <Input
            type="password"
            placeholder="Digite sua senha"
            name="password"
            onChange={handleChange}
            ref={inputRefRegister}
          />
          {errorPassword && <ErrorPassword>{errorPassword}</ErrorPassword>}
          <ImgEye
            onClick={() => {
              if (inputRefRegister.current) {
                const inputType = inputRefRegister.current.type;
                if (inputType === "password") {
                  inputRefRegister.current.type = "text";
                } else {
                  inputRefRegister.current.type = "password";
                }
              }
            }}
            src={Eye}
            alt="Mostrar senha"
          />
        </MessageInput>
        <MessageInput>
          Confirme sua senha
          <Input
            type="password"
            placeholder="Confirme sua senha"
            name="confirmPassword"
            onChange={handleChange}
            ref={inputRefConfirm}
          />
          {errorPassword && <ErrorPassword>{errorPassword}</ErrorPassword>}
          <ImgEye
            onClick={() => {
              if (inputRefConfirm.current) {
                const inputType = inputRefConfirm.current.type;
                if (inputType === "password") {
                  inputRefConfirm.current.type = "text";
                } else {
                  inputRefConfirm.current.type = "password";
                }
              }
            }}
            src={Eye}
            alt="Mostrar senha"
          />
        </MessageInput>
        <ButtonSubmit type="submit" value="Cadastrar" />
        <MessageCreateOrLog>
          Já tem uma conta?{" "}
          <Link to="/login">
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
