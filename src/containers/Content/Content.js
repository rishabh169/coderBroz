import React, { Component } from 'react';
import classes from './Content.module.css';
import Button from 'react-bootstrap/Button';
import Roadmap from './RoadMap/Roadmap';
import Aux from '../../hoc/Aux/Aux';
 

class Content extends Component{
  
  render(){
    // console.log(this.props);
    return(
      <Aux>
      <div className={classes.Content}>
          <div>
            <h1>100 Coding Interview Questions</h1>
            <h5>The practice you need to ace the coding interviews.</h5>

          </div>

          <div className="m-auto">
            <Button className = "mt-4" variant="outline-success" size="lg">Pay Now</Button>
          </div>
      </div>
      <Roadmap/>  

      
      </Aux>
    );
  }
}

export default Content;