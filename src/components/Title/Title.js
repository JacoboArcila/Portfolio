import React, { useEffect } from "react";
import { H1, Span } from "./TitleStyles";
import "./Title.scss";
import { useState } from "react";

const Title = () => {

  return (
    <div className="background-title">
      <div class="sign">
        <span>Front-End</span>
        <span >Developer</span>
      </div>
    </div>
  );
};

export default Title;
