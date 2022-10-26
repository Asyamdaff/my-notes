import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  padding: 0.6rem 0;
  color: var(--white);
  border-radius: 0.4rem;
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  border: 2px solid transparent;
  width: 100%;

  :hover,
  :focus,
  :active {
    outline: 0;
    transition: all 0.15s ease-in-out;
  }

  &.activate {
    background: var(--green);

    :hover,
    :focus,
    :active {
      color: var(--green);
      background: var(--white);
      border: 2px solid var(--green);
    }
  }

  &.archive {
    background: var(--black);

    :hover,
    :focus,
    :active {
      color: var(--black);
      background: var(--white);
      border: 2px solid var(--black);
    }
  }

  @media only screen and (max-width: 600px) {
    font-size: 0.8rem;
  }
`;
