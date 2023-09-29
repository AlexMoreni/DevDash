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
  align-items: center;

  @media (max-width: 480px) {
    flex-direction: column;
    padding-left: 20px;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const ContainerInfoUser = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const PhotoUser = styled.img`
  width: 150px;
  height: 150px;
  background-color: #fff;
  border-radius: 50%;
  border: 2px solid #a84bfe;
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
  padding: 10px 60px;
  margin-bottom: 30px;
  margin: 0 auto;
  cursor: pointer;

  &:hover {
    color: var(--color-purple);
  }

  @media (max-width: 480px) {
    margin-bottom: 15px;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    margin-bottom: 15px;
  }
`;

export const Form = styled.form`
  max-width: 700px;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;

  @media (max-width: 480px) {
    padding-top: 30px;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    padding-top: 30px;
    justify-content: center;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    padding-top: 60px;
    justify-content: center;
    align-items: center;
    display: block;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    justify-content: center;
    align-items: center;
    display: block;
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

  @media (min-width: 768px) and (max-width: 991px) {
    padding-bottom: 20px;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    padding-bottom: 20px;
  }
`;

export const Input = styled.input`
  width: 330px;
  font-family: var(--font-emphasis);
  background: #fff;
  padding: 16px 12px;
  border: 1px solid var(#e2e8f0);
  border-radius: 4px;
`;

export const ErrorName = styled.p`
  color: red;
  position: absolute;
  top: 0;
  right: 0;
`;

export const ImgEye = styled.img`
  position: absolute;
  top: 39px;
  right: 15px;
  cursor: pointer;
`;
