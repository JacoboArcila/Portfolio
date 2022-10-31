import React from "react";
import { ContainerFooter } from "./FooterStyles";
import "./FooterStyles.css";

const Footer = () => {
  return (
    <ContainerFooter>
      <h5>Made width ❤ by Jacobo</h5>
      <div className="containerIcons">
        <div className="container">
          <div className="btn fb-btn">
          <a href="https://github.com/JacoboArcila/" target="_blank">
            <i className="fa fa-github" aria-hidden="true" id="fb"></i>
          </a>
          </div>
          <div className="btn ig-btn">
          <a href="https://www.instagram.com/jcob.aw/" target="_blank">
            <i className="fa fa-instagram" aria-hidden="true" id="ig"></i>
          </a>
          </div>
          <div className="btn tw-btn">
            <a href="https://www.linkedin.com/in/jacobo-arcila/" target="_blank">
              <i className="fa fa-linkedin" aria-hidden="true" id="tw"></i>
            </a>
          </div>
        </div>
      </div>
    </ContainerFooter>
  );
};

export default Footer;
