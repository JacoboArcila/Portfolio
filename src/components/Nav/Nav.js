import React, {useState} from 'react';
import { Theme } from '../../Theme';
import Burguer from './Burguer';
import { Link } from 'react-router-dom';
import {Container, Button} from './NavStyles';

const Nav = () => {
  const [active, setActive] = useState(false);

  const handlerActive = () => {
    setActive(!active)
  }

  return (
    <div>
        <Container className={`${active ? 'activeCompo' : ''}`}>
            <h1 className='title' >&lt;JacoboArcila /&gt; </h1>
            <div className={`containerButton ${active ? 'active' : ''}`}>
                <Link className='link' to='/portfolio'>
                  <Button>Home</Button>
                </Link>
                <Link className='link' to='/portfolio/projects'>
                  <Button color={Theme.projects}>Projects</Button>
                </Link>
                <Link className='link' to='/portfolio/education'>
                  <Button color={Theme.education}>Education</Button>
                </Link>
                <Link className='link' to='/portfolio/contact'>
                  <Button color={Theme.contact}>Contact</Button>
                </Link>
            </div>
            <Burguer active={active} handlerActive={handlerActive} />
        </Container>
    </div>
  )
}

export default Nav