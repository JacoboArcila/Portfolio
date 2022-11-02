import styled from "styled-components";

export const ContainerProjects = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  
`;

export const Input = styled.input`
  padding: 20px 80px;
  border: 1px solid ${({ theme }) => theme.projects};
`;

export const Title = styled.h1`
  display: block;
  margin: 30px 0;
  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

export const Button = styled.button`
  border: 1px solid ${({ theme }) => theme.projects};
  margin-left: 10px;

  svg {
  }

  &:hover {
    cursor: pointer;
  }
`;
export const Container = styled.div`
    background-image: url("https://p4.wallpaperbetter.com/wallpaper/624/316/6/minimalism-pattern-monochrome-bricks-walls-wallpaper-preview.jpg");
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #141414;
  margin-top: -108px;

`;

export const ContainerCard = styled.div`
  display: flex;
  justify-content: center;
  gap: 70px;
`;
