import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  height: 90vh;
  background-image: url("../public/background-404.png");
  background-size: cover;
  padding: 15vh 60px 0 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  max-width: 400px;
  font-family: var(--font-emphasis);
  color: var(--color-text-white);
  font-size: 4rem;
  line-height: 120%;
`;

export const Text = styled.p`
  max-width: 450px;
  font-family: var(--font-emphasis);
  font-size: 2rem;
  color: var(--color-gray-text);
  margin: 25px 0 55px 0;
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
`;
