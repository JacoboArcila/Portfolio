import React, { useState } from "react";
import { Theme } from "../../Theme";
import Burguer from "./Burguer";
import { Link } from "react-router-dom";
import { Container, Button } from "./NavStyles";
import "./NavStyles.css";

const Nav = () => {
  const [active, setActive] = useState(false);

  const handlerActive = () => {
    setActive(!active);
  };

  return (
    <div>
      <Container className={`${active ? "activeCompo" : ""}`}>
        {/* <h1 className="title">&lt;JacoboArcila /&gt; </h1> */}
        <h1 className="title-main-h1" contentEditable spellcheck="false">Jacobo</h1>
        <div className={`containerButton ${active ? "active" : ""}`}>
          <Link className="link" to="/portfolio">
            <button className="main-div main-div2" ><h1 className="title-button">Home</h1></button>
          </Link>
          <Link className="link" to="/portfolio/projects">
            <button className="main-div main-div2" color={Theme.projects}><h1 className="title-button">Projects</h1></button>
          </Link>
         {/*  <Link className="link" to="/portfolio/education">
            <button className="main-div main-div2" color={Theme.education}><h1 className="title-button">Education</h1></button>
          </Link> */}
          {/* <Link className="link" to="/portfolio/contact">
            <button className="main-div main-div2" color={Theme.contact}><h1 className="title-button">Contact</h1></button>
          </Link> */}
        </div>
        <Burguer active={active} handlerActive={handlerActive} />
      </Container>
    </div>
  );
};

export default Nav;
