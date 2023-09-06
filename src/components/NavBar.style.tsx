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
`;

export const Logo = styled.h1`
  font-family: var(--font-emphasis);
  color: var(--color-purple);
  font-size: 4rem;
  font-weight: 700;
`;

export const ContainerLinks = styled.nav`
  font-family: var(--font-emphasis);
  display: flex;
  gap: 40px;
`;

export const LinksHeader = styled.a`
  color: var(--color-text-white);
  font-size: 2rem;
  cursor: pointer;
  &:hover {
    color: #a84bfe;
  }
`;
