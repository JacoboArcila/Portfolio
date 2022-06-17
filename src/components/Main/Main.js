import React from "react";
import ImgMain from "../../img/ImgMain";
import KnowMe from "../../img/KnowMe";
import { Container, DivKnowMe, DivGet } from "./MainStyles";

const Main = () => {
  return (
    <div>
      <Container>
        <div>
          <h1 className="hello">Hello! 👋</h1>
          <p className="text">
            i’m <span>Jacobo Arcila</span>. Frontend Developer. Always learning
          </p>
        </div>
        <hr />
        <ImgMain />
      </Container>

      <DivKnowMe>
        <h2 className="titleKnow">Get to know me</h2>
        <DivGet>
          <KnowMe />
          <hr />
          <div>
            <p className="text">
              🔥 Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book
            </p>
            <div>
              <h3 className="language">Language and Tools</h3>
              <img src="../../img/icons/html.png" alt="html" />
              <img src="../../img/icons/css.png" alt="css" />
              <img src="../../img/icons/javaScript-logo.png" alt="js" />
              <img src="../../img/icons/vue.png" alt="vue" />
              <img src="../../img/icons/sass.png" alt="sass" />
              <img src="../../img/icons/react.png" alt="react" />
              <img src="../../img/icons/nodejs.png" alt="node" />
              <img src="../../img/icons/git.png" alt="git" />
              <img src="../../img/icons/postman.png" alt="postMan" />
              <img src="../../img/icons/java.png" alt="java" />
            </div>
          </div>
        </DivGet>
      </DivKnowMe>
    </div>
  );
};

export default Main;
