import React from 'react';
import { Player } from 'video-react';
import Button from 'react-bootstrap/Button';
import Comment from '../Comment/Comment';

const videos = (props) =>{
  console.log(props);
  return(<div>
  <Player
      playsInline
      poster="/assets/poster.png"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    />  
    <hr/>
    <div className="my-3">
    <Button variant="outline-success mr-3">Like</Button>
  <Button variant="outline-danger">Dislike</Button>  
    </div>
  <h5>{props.match.params.id} </h5>
  <p>Discription</p>

  <Comment/>





  </div>);
}

export default videos;