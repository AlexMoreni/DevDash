import { ChangeEvent, useState, useEffect } from "react";

import { BsTrash } from "react-icons/bs";

import axios from "axios";

import {
  Container,
  ContainerInfo,
  NewProjectBtn,
  Title,
  TextEmphasis,
  ButtonNew,
  FormProject,
  MessageInput,
  Input,
  Button,
  Error,
  WarningProject,
  ContainerProjects,
  CardProject,
  ImgProject,
  TitleProject,
  ButtonDeleteProject,
  MessageProgress,
} from "./Projects.style";

type Props = {
  idUser: number;
  titleProject: string;
  imgProject: string;
  setTitleProject: React.Dispatch<React.SetStateAction<string>>;
  setImgProject: React.Dispatch<React.SetStateAction<string>>;
};

type Projects = {
  id: number;
  title: string;
  imgProject: string;
  done: boolean;
};

const Notes = ({
  idUser,
  titleProject,
  imgProject,
  setTitleProject,
  setImgProject,
}: Props) => {
  const [errorTitle, setErrorTitle] = useState<string>("");
  const [warningProject, setWarningProject] = useState<string>("");
  const [projectsUser, setprojectsUser] = useState<Projects[]>([]);
  const [idProject, setidProject] = useState<number>(0);
  const [projectLength, setProjectLength] = useState<boolean>(false);

  const [notesFetched, setNotesFetched] = useState(false);

  useEffect(() => {
    if (!notesFetched) {
      axios
        .get(`http://localhost:3000/users/projects/${idUser}`)
        .then((response) => {
          if (response.data.message === "Nenhum projeto encontrado!") {
            setWarningProject(response.data.message);
          } else {
            setprojectsUser(response.data.projects);
            setProjectLength(true);
          }
          setNotesFetched(true);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [idUser, notesFetched]);

  const handleNewProject = (e: any) => {
    setErrorTitle("");
    setWarningProject("");
    e.preventDefault();
    axios
      .post("http://localhost:3000/users/newproject", {
        idUser,
        titleProject,
        imgProject,
      })
      .then((response) => {
        if (response.data.message === "Minimo 3 caracteres!") {
          setErrorTitle(response.data.message);
          return;
        } else if (response.data.message === "Máximo 18 caracteres!") {
          setErrorTitle(response.data.message);
          return;
        } else {
          handleForm(false);
          setNotesFetched(false);
          setTitleProject("");
          setImgProject("");

          setTimeout(() => {
            setNotesFetched(true);
          }, 5000);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "title") {
      setTitleProject(e.target.value);
    } else {
      setImgProject(e.target.value);
    }
  };

  const handleForm = (display: boolean) => {
    const formEdit = document.querySelector("#formEdit");

    if (display) {
      formEdit!.classList.remove("hide");
    } else {
      formEdit!.classList.add("hide");
    }
  };

  const handleDeleteProject = (e: any) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/users/deleteproject", {
        id: idProject,
      })
      .then(() => {
        setNotesFetched(false);
        setProjectLength(false);

        setTimeout(() => {
          setNotesFetched(true);
        }, 5000);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Container>
      <ContainerInfo>
        <NewProjectBtn>
          <Title>
            Seus <TextEmphasis>Projetos</TextEmphasis>
          </Title>
          <ButtonNew
            onClick={() => {
              handleForm(true);
            }}
          >
            +
          </ButtonNew>
        </NewProjectBtn>
        <FormProject className="hide" id="formEdit" onSubmit={handleNewProject}>
          <MessageInput>
            Título:
            <Input
              type="text"
              placeholder="Digite o título"
              name="title"
              onChange={handleChange}
              value={titleProject}
            />
            {errorTitle && <Error>{errorTitle}</Error>}
          </MessageInput>
          <MessageInput>
            Imagem:
            <Input
              placeholder="Digite a URL da imagem"
              name="imgProject"
              onChange={handleChange}
              value={imgProject}
            />
          </MessageInput>
          <Button>Anotar</Button>
        </FormProject>
      </ContainerInfo>
      {warningProject && <WarningProject>{warningProject}</WarningProject>}
      {projectLength && (
        <ContainerProjects>
          {projectsUser.map((project) => (
            <CardProject key={project.id}>
              <ImgProject src={project.imgProject} />
              <TitleProject>{project.title}</TitleProject>
              {!project.done && (
                <MessageProgress>Em andamento!</MessageProgress>
              )}
              <form onSubmit={handleDeleteProject}>
                <ButtonDeleteProject
                  onClick={() => {
                    setidProject(project.id);
                  }}
                >
                  <BsTrash />
                </ButtonDeleteProject>
              </form>
            </CardProject>
          ))}
        </ContainerProjects>
      )}
    </Container>
  );
};

export default Notes;
