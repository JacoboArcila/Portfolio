import styled from "styled-components";

export const H1 = styled.h1`
  text-align: center;
  font-size: 5rem;
  font-weight: 800;
  letter-spacing: -0.06em;
  margin: 0 0 16px;
`;

export const Span = styled.span`
  display: block;
  font-size: 100px;
  line-height: 1.1;
  position: relative;

  &:before {
    background: linear-gradient(
      90deg,
      ${(props) => props.startColor},
      ${(props) => props.endColor}
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: absolute;
    inset: 0;
    content: ${(props) => props.content};
  }
`;
