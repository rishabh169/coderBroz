import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import instance from '../../axios';

class comment extends  Component{
  constructor() {
    super();


    this.handleCommentChange = this.handleCommentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      addcomment : "",
        comment: []
    }
}

handleCommentChange(e) {
  this.setState({addcomment: e.target.value});
  console.log(this.state.addcomment);
}

handleSubmit(e){
  console.log("submit");
  const commentData = {
    username : "lakshita",
    comment : this.state.addcomment
  }
  instance.post('/addcomment',commentData).then(res => console.log(res));
}



componentDidMount() {
  let url = '/';
  instance.get(url)
            .then(response => {
                if(response.data.length > 0){
                  this.setState({comment: response.data})
                }
            })
}
  render(){
    let result = this.state.comment.map((i) => {
      return(<h5>{i.comment}</h5>)
    } )
    return(<div>comment
      <Form>
          <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" onChange={this.handleCommentChange} value={this.state.addcomment} rows={3} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={this.handleSubmit}>
    Submit
  </Button>
    </Form>
    
      {result}
      </div>);

  }
}

export default comment;