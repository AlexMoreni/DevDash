import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  min-height: 90vh;
  padding-top: calc(15vh + 20px);
  background-color: var(--background);

  @media (max-width: 480px) {
    overflow-x: hidden;
  }
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

  @media (max-width: 480px) {
    text-align: center;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    text-align: center;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    font-size: 3.5rem;
    text-align: center;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    text-align: center;
  }
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

  @media (max-width: 480px) {
    padding: 0 10px;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    padding: 0 10px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    padding: 0 10px;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    padding: 0 20px;
  }
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

export const ContentHomeSide = styled.section`
  padding-top: 100px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 480px) {
    flex-direction: column;
    padding-top: 10px;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    padding-top: 60px;
    flex-direction: column;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    padding-top: 60px;
  }
`;

export const ContentColum = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;
