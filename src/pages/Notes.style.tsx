import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  min-height: 90vh;
  padding: calc(15vh + 20px) 60px 0 60px;
  background-color: var(--background);

  @media (max-width: 480px) {
    padding-top: calc(15vh + 20px);
    padding-left: 30px;
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 100px;

  @media (max-width: 480px) {
    max-width: 100%;
    flex-direction: column;
    padding-bottom: 40px;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    max-width: 100%;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    flex-direction: column;
  }
`;

export const NewNoteBtn = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 480px) {
    max-width: 100%;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    justify-content: center;
  }
`;

export const Title = styled.h1`
  color: var(--color-black);
  font-family: var(--font-emphasis);
  font-size: 4rem;
  line-height: 90px;
  margin-right: 20px;

  @media (max-width: 480px) {
    width: 100%;
    font-size: 2.7rem;
    text-align: center;
  }
`;

export const TextEmphasis = styled.span`
  color: #7c3aed;
  background-color: var(--color-black);
  padding: 5px;
`;

export const ButtonNew = styled.button`
  width: 50px;
  height: 50px;
  font-size: 4rem;
  font-weight: 900;
  color: var(--background);
  background-color: var(--color-black);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const FormNote = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media (min-width: 768px) and (max-width: 991px) {
    align-items: center;
  }
`;

export const MessageInput = styled.label`
  width: 330px;
  color: var(--color-gray-emphasis);
  font-family: var(--font-emphasis);
  font-size: 1.4rem;
  font-weight: 600;
  display: block;
  position: relative;
`;

export const Input = styled.input`
  width: 330px;
  font-family: var(--font-emphasis);
  background: #fff;
  padding: 16px 12px;
  border: 1px solid var(#e2e8f0);
  border-radius: 4px;
`;

export const TextInput = styled.input`
  width: 330px;
  height: 100px;
  font-family: var(--font-emphasis);
  background: #fff;
  padding: 16px 12px;
  border: 1px solid var(#e2e8f0);
  border-radius: 4px;
`;

export const Button = styled.button`
  color: #fff;
  font-family: var(--font-emphasis), sans-serif;
  font-size: 1.6rem;
  background-color: var(--color-black);
  padding: 10px 60px;
  margin-bottom: 30px;
  margin: 0 auto;
  cursor: pointer;

  &:hover {
    color: var(--color-purple);
  }
`;

export const Error = styled.p`
  color: red;
  position: absolute;
  top: 0;
  right: 0;
`;

export const WarningNote = styled.p`
  width: 100%;
  font-family: var(--font-emphasis), sans-serif;
  font-size: 5rem;
  color: var(--color-black);
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 480px) {
    font-size: 3rem;
    text-align: center;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    text-align: center;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    text-align: center;
  }
`;

export const ContainerNotes = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 25px;
  flex-wrap: wrap;
  padding-bottom: 100px;

  @media (min-width: 481px) and (max-width: 767px) {
    justify-content: center;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    justify-content: center;
  }
`;

export const CardNote = styled.div`
  width: 370px;
  height: 216px;
  background-color: #fff;
  border-radius: 16px;
  padding: 18px 32px;
  border-left: 5px solid var(--color-purple);
  box-shadow: 1px 2px 4px var(--color-black);
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
`;

export const TitleNote = styled.h1`
  max-width: 100%;
  font-family: var(--font-emphasis);
  font-size: 2.5rem;
  color: var(--color-black);
`;

export const DescriptionNote = styled.p`
  max-width: 100%;
  font-family: var(--font-text);
  font-size: 1.6rem;
  color: var(--color-black);
`;

export const ButtonDeleteNote = styled.button`
  font-size: 3rem;
  color: var(--color-purple);
  background-color: transparent;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;
