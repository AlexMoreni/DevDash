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
} from "./Edit.style";

type Props = {
  email: string;
  name: string;
  password: string;
  photoProfile: string;
};

const Edit = ({ email, name, password, photoProfile }: Props) => {
  return (
    <Container>
      <ContainerInfo>
        <ContainerInfoUser>
          <PhotoUser src={photoProfile} alt="Foto de perfil" />
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
        <Form className="hide" id="formEdit">
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
            />
          </MessageInput>
          <MessageInput>
            Senha:
            <Input
              type="password"
              placeholder="Digite sua nova senha"
              name="password"
              value={password}
            />
          </MessageInput>
          <MessageInput>
            Foto:
            <Input
              type="text"
              placeholder="Digite o link da imagem"
              name="imgProfile"
              value={photoProfile}
            />
          </MessageInput>
          <Button>Atualizar</Button>
        </Form>
      </ContainerInfo>
    </Container>
  );
};

export default Edit;
