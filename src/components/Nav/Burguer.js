import React, {useState} from "react";
import {BurguerDiv} from './BurguerStyles';
import { Squash as Hamburger } from 'hamburger-react';

const Burguer = () => {
    const [isOpen, setOpen] = useState(false)
  return (
    <BurguerDiv>
      <Hamburger toggled={isOpen} toggle={setOpen} />
    </BurguerDiv>
  );
};

export default Burguer;
