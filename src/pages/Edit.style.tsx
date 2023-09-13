import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  min-height: 90vh;
  padding: calc(15vh + 20px) 60px 0 60px;
  background-color: var(--background);
`;

export const ContainerInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerInfoUser = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const PhotoUser = styled.img`
  width: 150px;
  border-radius: 50%;
  border-radius: 2px solid #a84bfe;
`;

export const Name = styled.h1`
  color: var(--color-black);
  font-family: var(--font-emphasis), sans-serif;
  font-size: 4rem;
`;

export const Emphasis = styled.span`
  color: var(--color-purple);
`;

export const Email = styled.h4`
  font-size: 1.6rem;
  font-family: var(--font-text), sans-serif;
  color: var(--color-gray-text);
  margin-bottom: 10px;
`;

export const Button = styled.button`
  color: #fff;
  font-family: var(--font-emphasis), sans-serif;
  font-size: 1.6rem;
  background-color: var(--color-black);
  padding: 10px;
  margin-bottom: 30px;
  margin: 0 auto;
  cursor: pointer;

  &:hover {
    color: var(--color-purple);
  }
`;

export const Form = styled.form`
  max-width: 700px;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
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
