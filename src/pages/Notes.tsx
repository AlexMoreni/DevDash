import { ChangeEvent, useState, useEffect } from "react";

import { BsTrash } from "react-icons/bs";

import axios from "axios";

import {
  Container,
  ContainerInfo,
  NewNoteBtn,
  Title,
  TextEmphasis,
  ButtonNew,
  FormNote,
  MessageInput,
  Input,
  TextInput,
  Button,
  Error,
  WarningNote,
  ContainerNotes,
  CardNote,
  TitleNote,
  DescriptionNote,
  ButtonDeleteNote,
} from "./Notes.style";

type Props = {
  idUser: number;
  title: string;
  description: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
};

type Notes = {
  id: number;
  title: string;
  description: string;
};

const Notes = ({
  idUser,
  title,
  description,
  setTitle,
  setDescription,
}: Props) => {
  const [errorTitle, setErrorTitle] = useState<string>("");
  const [errorDescription, setErrorDescription] = useState<string>("");
  const [warningNote, setWarningNote] = useState<string>("");
  const [notesUser, setNotesUser] = useState<Notes[]>([]);
  const [idNote, setIdNote] = useState<number>(0);
  const [notesLength, setNotesLength] = useState<boolean>(false);

  const [notesFetched, setNotesFetched] = useState(false);

  useEffect(() => {
    if (!notesFetched) {
      axios
        .get(`http://localhost:3000/users/notes/${idUser}`)
        .then((response) => {
          if (response.data.message === "Nenhuma nota encontrada!") {
            setWarningNote(response.data.message);
          } else {
            setNotesUser(response.data.notes);
            setNotesLength(true);
          }
          setNotesFetched(true);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [idUser, notesFetched]);

  const handleNewNote = (e: any) => {
    setErrorTitle("");
    setErrorDescription("");
    setWarningNote("");
    e.preventDefault();
    axios
      .post("http://localhost:3000/users/newnote", {
        idUser,
        title,
        description,
      })
      .then((response) => {
        if (response.data.message === "Minimo 3 caracteres!") {
          setErrorTitle(response.data.message);
          return;
        } else if (response.data.message === "Caracteres insuficientes!") {
          setErrorDescription(response.data.message);
          return;
        } else {
          handleForm(false);
          setNotesFetched(false);
          setTitle("");
          setDescription("");

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
      setTitle(e.target.value);
    } else {
      setDescription(e.target.value);
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

  const handleDeleteNote = (e: any) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/users/deletenote", {
        id: idNote,
      })
      .then(() => {
        setNotesFetched(false);
        setNotesLength(false);

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
        <NewNoteBtn>
          <Title>
            Suas <TextEmphasis>Anotações</TextEmphasis>
          </Title>
          <ButtonNew
            onClick={() => {
              handleForm(true);
            }}
          >
            +
          </ButtonNew>
        </NewNoteBtn>
        <FormNote className="hide" id="formEdit" onSubmit={handleNewNote}>
          <MessageInput>
            Título:
            <Input
              type="text"
              placeholder="Digite o título"
              name="title"
              onChange={handleChange}
              value={title}
            />
            {errorTitle && <Error>{errorTitle}</Error>}
          </MessageInput>
          <MessageInput>
            Descrição:
            <TextInput
              placeholder="Digite a descrição da nota"
              name="description"
              onChange={handleChange}
              value={description}
            ></TextInput>
            {errorDescription && <Error>{errorDescription}</Error>}
          </MessageInput>
          <Button>Anotar</Button>
        </FormNote>
      </ContainerInfo>
      {warningNote && <WarningNote>{warningNote}</WarningNote>}
      {notesLength && (
        <ContainerNotes>
          {notesUser.map((note) => (
            <CardNote key={note.id}>
              <TitleNote>{note.title}</TitleNote>
              <DescriptionNote>{note.description}</DescriptionNote>
              <form onSubmit={handleDeleteNote}>
                <ButtonDeleteNote
                  onClick={() => {
                    setIdNote(note.id);
                  }}
                >
                  <BsTrash />
                </ButtonDeleteNote>
              </form>
            </CardNote>
          ))}
        </ContainerNotes>
      )}
    </Container>
  );
};

export default Notes;
