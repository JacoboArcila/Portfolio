import React from "react";
import { Container, DivKnowMe, DivGet, DivTitle } from "./MainStyles";
import { motion } from "framer-motion";
import "./MainStyles.css";
import llorando from '../../img/images/real.jpeg'
import FormContact from "../Form/FormContact";

const Main = () => {
  return (
    <div>
      <DivKnowMe>
        <div className="titleKnows">
          <motion.h2
            className="titleKnow-title"
            animate={{
              color: ["rgba(30,132,242,0.52)", "#fff", "rgba(30,132,242,0.52)"],
              textShadow: [
                "-1px 0px 10px rgba(30,132,242,0.78)",
                "-1px 0px 10px rgba(255,255,255,1)",
                "-1px 0px 10px rgba(30,132,242,0.78)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 4 }}
          >
            Sobre
          </motion.h2>
          <motion.h2
            className="titleKnow-title"
            animate={{
              color: ["rgba(30,132,242,0.52)", "#fff", "rgba(30,132,242,0.52)"],
              textShadow: [
                "-1px 0px 10px rgba(30,132,242,0.78)",
                "-1px 0px 10px rgba(255,255,255,1)",
                "-1px 0px 10px rgba(30,132,242,0.78)",
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
      </DivKnowMe>
    </div>
  );
};

export default Main;
