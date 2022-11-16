import React from "react";
import { ContainerProjects,  Title, Container, ContainerCard } from "./ProjectsStyles";
import ImgProjects from "../img/ImgProjects";
import Card from "../components/CardProjects/Card";
import CardNeon from "../components/CardNeon/CardNeon";

function Projects() {
  return (
    <Container>
      <ContainerProjects>
        <div>
          {/* <Title>Projects</Title> */}
          <div className="signnn">
            <span style={{"fontFamily": "neon6", "margin": "2rem"}}>Projects</span>
          </div>
        </div>
        {/* <ImgProjects /> */}
      </ContainerProjects>
      <ContainerCard>
      <CardNeon />
      <CardNeon />
      <CardNeon />
        {/* <Card /> */}
      </ContainerCard>
    </Container>
  );
}

export default Projects;
