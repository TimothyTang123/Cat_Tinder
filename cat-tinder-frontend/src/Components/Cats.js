import React, { Component } from 'react';
import {Col, Container, Row, ListGroup, ListGroupItem, Button, Modal} from 'react-bootstrap'

class Cats extends Component {
  constructor(props){
    super(props)
    this.state = {
      show: false,
      cat: " "
    }
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow(cat) {
    this.setState({ show: true, cat: cat});
  }

  render() {
    return (
	<Container className="table">
  <Row>
     	<Col xs={12}>
          	<ListGroup className="distabletwo">
              {this.props.cats.map((cat, index) =>{
                return (
                  <ListGroupItem key={index}>
                      <h4>
                      <div className="distable">
                        <span className='cat-name'>
                          {cat.name}
                        </span>
                         <small className='cat-age'></small>
                        </div>
                      </h4>

                    <span className='cat-enjoys'>

                    </span>

                    <div className = "disbutton">
                    <button className="btn btn-primary" onClick={this.handleShow.bind(this, cat)}>
                        More Cat Info
                    </button>
                    <button class = "btn btn-danger" onClick={this.props.delete.bind(this, cat.id)}>Delete</button>
                    </div>
                  </ListGroupItem>
                )
              })}
            </ListGroup>
          </Col>
        </Row>
        <Modal show={this.state.show} onHide={this.handleClose.bind(this)}>
             <Modal.Header closeButton>
               <Modal.Title>{this.state.cat.name}</Modal.Title>
             </Modal.Header>
             <Modal.Body>Enjoys: {this.state.cat.enjoys}<br/>
             Age: {this.state.cat.age}</Modal.Body>
             <Modal.Footer>
               <Button variant="secondary" onClick={this.handleClose.bind(this)}>
                 Close
               </Button>
             </Modal.Footer>
          </Modal>
	</Container>
    );
  }
}

export default Cats;
