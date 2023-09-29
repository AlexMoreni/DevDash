import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  min-height: 90vh;
  background-image: url("../public/background-404.png");
  background-size: cover;
  padding: 15vh 60px 0 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 480px) {
    padding-top: 20vh;
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  max-width: 400px;
  font-family: var(--font-emphasis);
  color: var(--color-text-white);
  font-size: 4rem;
  line-height: 120%;

  @media (max-width: 480px) {
    font-size: 3rem;
    text-align: center;
  }
`;

export const Text = styled.p`
  max-width: 450px;
  font-family: var(--font-emphasis);
  font-size: 2rem;
  color: var(--color-gray-text);
  margin: 25px 0 55px 0;

  @media (max-width: 480px) {
    text-align: center;
  }
`;

export const ButtonHome = styled.button`
  font-family: var(--font-emphasis);
  font-size: 1.4rem;
  color: var(--color-text-white);
  background: #151557;
  padding: 12px 24px;
  border-radius: 999px;
  text-transform: uppercase;
  cursor: pointer;

  @media (max-width: 480px) {
    margin-left: 60px;
    margin-bottom: 30px;
  }
`;

export const Img = styled.img`
  @media (max-width: 480px) {
    max-width: 90%;
  }
`;
