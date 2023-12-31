import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  min-height: 90vh;
  background-color: var(--background);
  display: flex;
  justify-content: space-between;

  @media (max-width: 480px) {
    overflow-x: hidden;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    overflow-x: hidden;
  }
`;

export const FormLogin = styled.form`
  padding-top: calc(15vh + 20px);
  max-width: 50%;
  padding-left: 65px;

  @media (max-width: 480px) {
    max-width: 90%;
    padding-left: 25px;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    min-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
    padding-top: calc(15vh + 20px);
  }

  @media (min-width: 768px) and (max-width: 991px) {
    min-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
    padding-top: calc(15vh + 20px);
  }
`;

export const Title = styled.h2`
  color: var(--color-gray-emphasis);
  font-family: var(--font-emphasis);
  font-size: 3.6rem;
  font-weight: 700;
  margin-bottom: 16px;

  @media (max-width: 480px) {
    text-align: center;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    text-align: center;
  }
`;

export const Message = styled.p`
  width: 450px;
  color: var(--color-gray-text);
  font-family: var(--font-emphasis);
  font-size: 1.6rem;
  margin-bottom: 40px;

  @media (max-width: 480px) {
    width: 100%;
    text-align: center;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    text-align: center;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    text-align: center;
  }
`;

export const MessageInput = styled.label`
  width: 384px;
  color: var(--color-gray-emphasis);
  font-family: var(--font-emphasis);
  font-size: 1.4rem;
  font-weight: 600;
  display: block;
  position: relative;
`;

export const Input = styled.input`
  width: 384px;
  font-family: var(--font-emphasis);
  background: #fff;
  padding: 16px 12px;
  border: 1px solid var(#e2e8f0);
  border-radius: 4px;
  display: block;
  margin: 8px 0px 10px 0px;

  @media (max-width: 480px) {
    max-width: 90%;
  }
`;

export const MessageItLost = styled.p`
  color: #7c3aed;
  font-family: var(--font-emphasis);
  font-size: 1.2rem;
  position: absolute;
  top: 0;
  right: 0;

  @media (max-width: 480px) {
    right: 40px;
  }
`;

export const ImgEye = styled.img`
  position: absolute;
  top: 46px;
  right: 15px;
  cursor: pointer;

  @media (max-width: 480px) {
    right: 50px;
  }
`;

export const ButtonSubmit = styled.input`
  width: 384px;
  color: #fff;
  background: #7c3aed;
  padding: 16px 24px;
  border-radius: 4px;
  cursor: pointer;
  margin: 32px 0;

  @media (max-width: 480px) {
    width: 100%;
    margin-top: 32px;
    margin-left: 10px;
  }
`;

export const MessageCreateOrLog = styled.p`
  width: 450px;
  color: var(--color-gray-text);
  font-family: var(--font-emphasis);
  font-size: 1.6rem;

  @media (max-width: 480px) {
    margin-bottom: 10px;
  }
`;

export const TextEmphasis = styled.span`
  color: #7c3aed;
`;

export const ContainerImg = styled.div`
  max-width: 100%;
  height: 90vh;

  @media (max-width: 480px) {
    display: none;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    display: none;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    display: none;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    overflow: hidden;
    height: 110vh;
  }
`;

export const ImgBackground = styled.img`
  height: 100%;
`;

export const ErrorEmail = styled.p`
  color: red;
  position: absolute;
  top: 0;
  right: 0;

  @media (max-width: 480px) {
    right: 40px;
  }
`;

export const ErrorName = styled.p`
  color: red;
  position: absolute;
  top: 0;
  right: 0;

  @media (max-width: 480px) {
    right: 40px;
  }
`;

export const ErrorPassword = styled.p`
  color: red;
  position: absolute;
  top: 0;
  right: 0;

  @media (max-width: 480px) {
    right: 40px;
  }
`;

export const ErrorPasswordLogin = styled.p`
  color: red;
  text-align: center;
  position: absolute;
  bottom: -20px;
  right: 0;

  @media (max-width: 480px) {
    right: 40px;
  }
`;
