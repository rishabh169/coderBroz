import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import classes from './Lev.module.css';
import {Link} from 'react-router-dom';



const lev = (props) =>{
  // console.log(props);
  let cards = props.ar.map(i=>{
    
    return(
    <div className='my-5'>
      <Card style={{ width: '18rem' , height:"25rem" }}>
    <Card.Img variant="top" src={i.src} />  
    <Card.Body>
      <Card.Title>{i.title}</Card.Title>
      <Button variant="primary" as={Link} to={`/content/${i.title}`}>Learn now</Button>
    </Card.Body>
  </Card>


    </div>
  
  
  )}
  );

  return(
  <div >
  
    {/* Level {props.le} */}
    <div className= { classes.Lev}>
      {cards};
    </div>
  
      
</div>
  );}

export default lev;