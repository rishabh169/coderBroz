import React from 'react';
import Aux from '../../hoc/Aux/Aux'
import Container from 'react-bootstrap/Container';
import Navbar from '../Navigation/Navbar';
import {Link} from 'react-router-dom';
import classes from './Layout.module.css';

const layout = (props) => {

  return(
    <Aux>
      
      <Navbar/>
      <Container>
      {props.children}
      <hr/>

<footer   >

    <div className={classes.foot} >
    <Link to='/'>Contact Us </Link>
    <Link to='/'>FAQ </Link>
    <Link to='/'>Reviews </Link>
    <Link to='/'> Legal Stuff  </Link>
    <Link to='/'>Privacy Policy </Link>
    </div>
    <div className={classes.foot}>
    <p>Copyright © 2020 CoderBroz, LLC. All rights reserved.</p>

    </div>
</footer>
      </Container>
     
    </Aux>
  );
}

export default layout;