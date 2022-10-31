import React from "react";
import ImgMain from "../../img/ImgMain";
import KnowMe from "../../img/KnowMe";
import { Container, DivKnowMe, DivGet, DivTitle } from "./MainStyles";
import { motion } from "framer-motion";
import "./MainStyles.css";
import llorando from '../../img/images/real.jpeg'
import FormContact from "../Form/FormContact";

const Main = () => {
  return (
    <div>
      {/* <Container>
        <div>
          <h1 className="hello">Hello! 👋</h1>
          <p className="text">
            i’m <span>Jacobo Arcila</span>. Frontend Developer. Always learning
          </p>
        </div>
        <hr />
        <ImgMain />
      </Container> */}

      <DivKnowMe>
        {/* <h2 className="titleKnow">Get to know me</h2> */}
        <div className="titleKnows">
          <motion.h2
            className="titleKnow-title"
            animate={{
              color: ["#C586C0", "#fff", "#C586C0"],
              textShadow: [
                "-1px 0px 10px rgba(197,134,192,1)",
                "-1px 0px 10px rgba(255,255,255,1)",
                "-1px 0px 10px rgba(197,134,192,1)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 4 }}
          >
            Sobre
          </motion.h2>
          <motion.h2
            className="titleKnow-title"
            animate={{
              color: ["#C586C0", "#fff", "#C586C0"],
              textShadow: [
                "-1px 0px 10px rgba(197,134,192,1)",
                "-1px 0px 10px rgba(255,255,255,1)",
                "-1px 0px 10px rgba(197,134,192,1)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 4,
              delay: 4,
            }}
          >
            Mi
          </motion.h2>
        </div>
        <div className="containerBox">
          <div className="mainBox">
            {/* <p className="mainBox-text">02</p> */}
            <img className="mainBox-img" src={llorando} alt="" />
          </div>
          <div className="textBox">
            <p>
              Mi vocación por el desarrollo web ha surgido desde que conozco un
              computador. Durante los estudios medios -bachillerato- me incliné
              por el Front-end. Aquí fuí reconocido como el mejor desarrollador
              de la modalidad. Durante mi primer año en Dígital House desarrollé
              la siguientes habilidades, además de las técnicas:
              <br />
              <span className="textBox-list">
                - Sensibilidad estética en diseño web
                <br />
                - Comunicación efectiva como lider de equipo
                <br />
                - Resolución de problemas de manera democratizada
                <br />
                - Consciencia del valor del tiempo y de su optimización.
                <br />
                - Disponibilidad al aprendizaje constante
                <br />
              </span>
            </p>
          </div>
        </div>
        <FormContact />
        {/* <DivGet>
          <KnowMe />
          <hr />
          <div>
            <p className="textBio">
              Apasionado de React,
              <br />
              🔥 Creating a responsive page using React / Redux / HTML / CSS 🔥
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
        </DivGet> */}
      </DivKnowMe>
    </div>
  );
};

export default Main;
