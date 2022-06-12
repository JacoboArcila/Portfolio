import React from "react";
import { BurguerDiv } from "./BurguerStyles";
import { Squash as Hamburger } from "hamburger-react";

const Burguer = ({ active, handlerActive }) => {
  return (
    <BurguerDiv>
      <Hamburger
        toggled={active}
        onToggle={(toggled) => {
          if (toggled) {
            handlerActive();
          } else {
            handlerActive();
          }
        }}
      />
    </BurguerDiv>
  );
};

export default Burguer;
