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
            <p className="textBio">
              🔥 Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book
            </p>
            <div>
              <h3 className="language">Language and Tools</h3>
              <div className="containerIcons">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                  alt="html"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
                  alt="css"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                  alt="js"
                />
                <img
                  src="https://sass-lang.com/assets/img/styleguide/seal-color-reversed-c50d9b78.png"
                  alt="sass"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                  alt="react"
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png"
                  alt="node"
                />
                <img
                  src="https://iconape.com/wp-content/png_logo_vector/git-icon.png"
                  alt="git"
                />
                <img
                  src="https://seeklogo.com/images/P/postman-logo-0087CA0D15-seeklogo.com.png"
                  alt="postMan"
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/512/226/226777.png"
                  alt="java"
                />
              </div>
            </div>
          </div>
        </DivGet>
      </DivKnowMe>
    </div>
  );
};

export default Main;
