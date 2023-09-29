import styled from "styled-components";

export const ContainerHeader = styled.header`
  width: 100vw;
  height: 15vh;
  background: var(--color-black);
  padding: 0 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 99;

  @media (max-width: 480px) {
    padding: 0 10px;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    padding: 0 30px;
  }
`;

export const Logo = styled.h1`
  font-family: var(--font-emphasis);
  color: var(--color-purple);
  font-size: 4rem;
  font-weight: 700;

  @media (max-width: 480px) {
    font-size: 2.8rem;
  }
`;

export const ContainerLinks = styled.nav`
  font-family: var(--font-emphasis);
  display: flex;
  align-items: center;
  gap: 40px;

  @media (max-width: 480px) {
    gap: 10px;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    gap: 15px;
  }
`;

export const LinksHeader = styled.a`
  color: var(--color-text-white);
  font-size: 2rem;
  cursor: pointer;
  &:hover {
    color: #a84bfe;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

export const PhotoProfile = styled.img`
  width: 50px;
  height: 50px;
  background-color: #fff;
  border: 2px solid #fff;
  border-radius: 50%;

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
  }
`;
