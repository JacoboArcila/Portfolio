import React from "react";
import { Container,  Title } from "./ProjectsStyles";
import ImgProjects from "../img/ImgProjects";
import Card from "../components/CardProjects/Card";

function Projects() {
  return (
    <div>
      <Container>
        <div>
          <Title>Projects</Title>
        </div>
        <ImgProjects />
      </Container>
      <Card />
    </div>
  );
}

export default Projects;
