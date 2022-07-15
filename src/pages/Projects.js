import React from "react";
import { ContainerProjects,  Title, Container, ContainerCard } from "./ProjectsStyles";
import ImgProjects from "../img/ImgProjects";
import Card from "../components/CardProjects/Card";

function Projects() {
  return (
    <Container>
      <ContainerProjects>
        <div>
          <Title>Projects</Title>
        </div>
        <ImgProjects />
      </ContainerProjects>
      <ContainerCard>
        <Card />
      </ContainerCard>
    </Container>
  );
}

export default Projects;
