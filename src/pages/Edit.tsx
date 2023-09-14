import { ChangeEvent, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Eye from "../../public/eye-off.png";

import {
  Container,
  ContainerInfo,
  ContainerInfoUser,
  PhotoUser,
  Name,
  Emphasis,
  Email,
  Button,
  MessageInput,
  Input,
  Form,
  ErrorName,
  ImgEye,
} from "./Edit.style";

type Props = {
  email: string;
  name: string;
  password: string;
  photoProfile: string;
  setNameUser: React.Dispatch<React.SetStateAction<string>>;
  setPasswordUser: React.Dispatch<React.SetStateAction<string>>;
  setImgProfileUser: React.Dispatch<React.SetStateAction<string>>;
};

const Edit = ({
  email,
  name,
  password,
  setPasswordUser,
  photoProfile,
  setNameUser,
  setImgProfileUser,
}: Props) => {
  const navigate: any = useNavigate();
  const [message, setMessage] = useState<string>("");
  const [errorName, setErrorName] = useState<string>("");
  const [errorPassword, setErrorPassword] = useState<string>("");
  const [errorPasswordOld, setErrorPasswordOld] = useState<string>("");
  const [oldPassword, setOldPassword] = useState<string>("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const inputRefOld = useRef<HTMLInputElement | null>(null);

  const handleEdit = (e: any) => {
    e.preventDefault();

    setErrorName("");
    setErrorPassword("");
    axios
      .post("http://localhost:3000/users/edit", {
        email,
        name,
        password,
        imgProfile: photoProfile,
        oldPassword,
      })
      .then((response) => {
        if (response.data.message === "Insira apenas letras no nome!") {
          setErrorName(response.data.message);
          return;
        } else if (response.data.message === "Nome com tamanho inválido!") {
          setErrorName(response.data.message);
          return;
        } else if (response.data.message === "Mínimo 5 caracteres!") {
          setErrorPassword(response.data.message);
          return;
        } else if (response.data.message === "Está já é sua senha!") {
          setErrorPassword(response.data.message);
          return;
        } else if (response.data.message === "Senha incorreta!") {
          setErrorPasswordOld(response.data.message);
          return;
        } else {
          setMessage(response.data.message);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "name") {
      setNameUser(e.target.value);
    } else if (e.target.name === "password") {
      setPasswordUser(e.target.value);
    } else if (e.target.name === "imgProfile") {
      setImgProfileUser(e.target.value);
    } else if (e.target.name === "oldPassword") {
      setOldPassword(e.target.value);
    }
  };

  useEffect(() => {
    if (message == "Atualizado!") {
      navigate("/");
    }
  });

  return (
    <Container>
      <ContainerInfo>
        <ContainerInfoUser>
          <PhotoUser src={photoProfile} />
          <div>
            <Name>
              Olá <Emphasis>{name}</Emphasis>
            </Name>
            <Email>{email}</Email>
            <Button
              onClick={() => {
                const formEdit = document.querySelector("#formEdit");
                formEdit!.classList.remove("hide");
              }}
            >
              Editar Perfil
            </Button>
          </div>
        </ContainerInfoUser>
        <Form className="hide" id="formEdit" onSubmit={handleEdit}>
          <MessageInput>
            E-mail:
            <Input
              type="email"
              placeholder="Digite seu email"
              name="email"
              disabled
              value={email}
            />
          </MessageInput>
          <MessageInput>
            Nome:
            <Input
              type="text"
              placeholder="Digite seu nome"
              name="name"
              value={name}
              onChange={handleChange}
            />
            {errorName && <ErrorName>{errorName}</ErrorName>}
          </MessageInput>
          <MessageInput>
            Nova senha:
            <Input
              type="password"
              placeholder="Digite sua nova senha"
              name="password"
              onChange={handleChange}
              ref={inputRef}
            />
            {errorPassword && <ErrorName>{errorPassword}</ErrorName>}
            <ImgEye
              onClick={() => {
                if (inputRef.current) {
                  const inputType = inputRef.current.type;
                  if (inputType === "password") {
                    inputRef.current.type = "text";
                  } else {
                    inputRef.current.type = "password";
                  }
                }
              }}
              src={Eye}
              alt="Mostrar senha"
            />
          </MessageInput>
          <MessageInput>
            Foto:
            <Input
              type="text"
              placeholder="Digite o link da imagem"
              name="imgProfile"
              value={photoProfile}
              onChange={handleChange}
            />
          </MessageInput>
          <MessageInput>
            Digite sua antiga senha:
            <Input
              type="password"
              placeholder="Digite sua antiga senha"
              name="oldPassword"
              onChange={handleChange}
              ref={inputRefOld}
            />
            {errorPasswordOld && <ErrorName>{errorPasswordOld}</ErrorName>}
            <ImgEye
              onClick={() => {
                if (inputRefOld.current) {
                  const inputType = inputRefOld.current.type;
                  if (inputType === "password") {
                    inputRefOld.current.type = "text";
                  } else {
                    inputRefOld.current.type = "password";
                  }
                }
              }}
              src={Eye}
              alt="Mostrar senha"
            />
          </MessageInput>
          <Button>Atualizar</Button>
        </Form>
      </ContainerInfo>
    </Container>
  );
};

export default Edit;
