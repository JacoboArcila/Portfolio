import React from 'react';
import { Theme } from '../../Theme';
import {Container, Button} from './NavStyles';

const Nav = () => {
  return (
    <div>
        <Container>
            <h1>&lt;JacoboArcila /&gt; </h1>
            <div>
                <Button>Home</Button>
                <Button color={Theme.projects}>Projects</Button>
                <Button color={Theme.education}>Education</Button>
                <Button color={Theme.contact}>Contact</Button>
            </div>    
        </Container>
    </div>
  )
}

export default Nav