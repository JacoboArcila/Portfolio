import React from "react";
import {
  ContainerProjects,
  Title,
  Container,
  ContainerCard,
} from "./ProjectsStyles";
import ImgProjects from "../img/ImgProjects";
import CardNeon from "../components/CardNeon/CardNeon";
import projectsInfo from "../assets/projectsInfo.json";

function Projects() {
  return (
    <Container>
      <ContainerProjects>
        <div>
          <div className="signnn">
            <span style={{ fontFamily: "neon6", margin: "2rem" }}>
              Projects
            </span>
          </div>
        </div>
      </ContainerProjects>
      <ContainerCard>
        {projectsInfo.map((item) => (
          <CardNeon card={item} />
        ))}
      </ContainerCard>
    </Container>
  );
}

export default Projects;
