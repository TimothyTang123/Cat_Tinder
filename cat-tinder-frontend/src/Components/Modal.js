import React, { Component } from 'react'
import {Button} from 'react-bootstrap'

class Modal extends Component {
  constructor(props){
    super(props)
    this.state = {
      show: false,
      name:"",
      age:"",
      enjoys:""
    }
  }

  // modalHide(){
  //   this.setState({show:false})
  // }
  //
  // openModal(id){
  //   this.setState({
  //     show:true,
  //     name: id.name,
  //     age: id.age,
  //     enjoys: id.enjoys
  //   })
  // }

  render(){
    return(
<div>
    <Modal
      size="lg" aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Header>
          <Modal.Title>Welcome to Name</Modal.Title>
        </Modal.Header>
              <Modal.Body>This cat is dope</Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
    </Modal>
</div>
    )
  }
}

export default Modal
