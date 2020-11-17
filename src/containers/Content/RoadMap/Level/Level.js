import React from 'react';
import classes from './Level.module.css';
import Lev from './Lev/Lev';
import Aux from '../../../../hoc/Aux/Aux';


const Level = (props) =>{
  
  let val = props.ar.map(i => {
   return <Lev le = {i+1} ar ={i} />
  });

  return(
  <Aux>
    
      
        <div className={`${classes.Level }`} >
          {val}
        </div>
  </Aux>
);}

export default Level;