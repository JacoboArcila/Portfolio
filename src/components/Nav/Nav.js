import React from 'react';
import { Theme } from '../../Theme';
import Burguer from './Burguer';
import {Container, Button} from './NavStyles';

const Nav = () => {
  return (
    <div>
        <Container>
            <h1>&lt;JacoboArcila /&gt; </h1>
            <div classname="active">
                <Button>Home</Button>
                <Button color={Theme.projects}>Projects</Button>
                <Button color={Theme.education}>Education</Button>
                <Button color={Theme.contact}>Contact</Button>
            </div>
            <Burguer />
        </Container>
    </div>
  )
}

export default Nav