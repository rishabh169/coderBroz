// import classes from '*.module.css';
import React from 'react';
import Lottie from 'react-lottie';
import animationData from './lotties/develop';
import two from './lotties/two';
import time from './lotties/time';
import timer from './lotties/timer';

import classes from './Home.module.css';

const home = (props) =>{
  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: two,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const defaultOptions3 = {
    loop: true,
    autoplay: true,
    animationData: timer,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const defaultOptions4 = {
    loop: true,
    autoplay: true,
    animationData: time,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return(
    <div>

    <div>
      <div className={classes.first}>
        <div>
          <h1>Learn Coding like a Game</h1>
          <h2>#codeIt</h2>
          The ultimate resource to prepare for coding interviews. Everything you need, in one streamlined platform.
        </div>
        <div>
      <Lottie 
	      options={defaultOptions1}
        height={500}
        width={500}
      />
      </div>
      </div>
    </div>
    <hr/> 
    
      <div className={classes.first}>
        
        <div>
      <Lottie 
	      options={defaultOptions2}
        height={500}
        width={500}
      />
      </div>

      <div>
          <h2>100 Hand-Picked Questions</h2>
          <h5>Coding interview prep is a numbers game that many candidates lose. We've hand-picked 100 of the best coding interview questions to truly prepare you.</h5>
        </div>
      </div>

      <hr/>
      <div className={classes.first}>
        
        <div>
      <Lottie 
	      options={defaultOptions3}
        height={500}
        width={500}
      />
      </div>

      <div>
          <h2>70+ Hours Of Video Explanations</h2>
          <h5>Algorithms are tough to learn on paper. Each and every one of our questions is accompanied by a two-part video explanation to maximize learning. That's over 70 hours of content, all at your fingertips.</h5>
        </div>
      </div>

      <hr/>
      <div className={classes.first}>
        
        <div>
      <Lottie 
	      options={defaultOptions4}
        height={500}
        width={500}
      />
      </div>

      <div>
          <h2>Space-Time Complexity Analyses</h2>
          <h5>Understanding how much memory an algorithm uses and how fast it runs is exceedingly important. All of our explanations include a rigorous space-time complexity analysis.</h5>
        </div>
      </div>
    </div>


    
  );
}

export default home;