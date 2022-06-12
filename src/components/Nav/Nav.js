import React, {useState} from 'react';
import { Theme } from '../../Theme';
import Burguer from './Burguer';
import {Container, Button} from './NavStyles';

const Nav = () => {
  const [active, setActive] = useState(false);

  const handlerActive = () => {
    setActive(!active)
    console.log(active)
  }

  return (
    <div>
        <Container>
            <h1>&lt;JacoboArcila /&gt; </h1>
            <div className={`containerButton ${active ? 'active' : ''}`}>
                <Button>Home</Button>
                <Button color={Theme.projects}>Projects</Button>
                <Button color={Theme.education}>Education</Button>
                <Button color={Theme.contact}>Contact</Button>
            </div>
            <Burguer active={active} handlerActive={handlerActive} />
        </Container>
    </div>
  )
}

export default Nav