import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  min-height: 90vh;
  padding-top: calc(15vh + 20px);
  background-color: var(--background);
`;

export const ContentHome = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  color: var(--color-black);
  font-family: "Poppins", sans-serif;
  font-size: 4rem;
  line-height: 90px;
  margin-bottom: 20px;
`;

export const Emphasis = styled.span`
  color: var(--color-purple);
  background-color: var(--color-black);
  padding: 10px;
`;

export const Text = styled.p`
  max-width: 600px;
  color: var(--color-black);
  font-family: "Poppins", sans-serif;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 25px;
`;

export const Button = styled.button`
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-size: 1.6rem;
  background-color: var(--color-black);
  padding: 10px;
  margin-bottom: 30px;
  cursor: pointer;

  &:hover {
    color: var(--color-purple);
  }
`;
