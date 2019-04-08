import React, { Component } from 'react'
import {FormControl} from 'react-bootstrap'

class NewCat extends Component{
  constructor(props){
    super(props)
    this.state = {
      form : {
        name: '',
        age: '',
        enjoys: ''
      }
    }
  }

  submitAndClear () {
    let {kitty} = this.props
    kitty(this.state.form)
    this.setState({
      form:{
      name: "",
      age: "",
      enjoys:""
    }
  })
  }

  handleChange(event){
    let { form } = this.state
    form[event.target.name] = event.target.value
    this.setState({form: form})
  }
    render(){
      return(
      <div className="disform">
      <label id="name">Name</label>
        <FormControl className="disformtwo"
        placeholder="Enter Cat Name"
        type="text"
        name="name"
        onChange={this.handleChange.bind(this)}
        value={this.state.form.name}
        />
        <label id="age">Age</label>
        <FormControl className="disformtwo"
        placeholder="Enter Age"
        type="text"
        name="age"
        onChange={this.handleChange.bind(this)}
        value={this.state.form.age}
        />
        <label id="enjoys">Enjoys</label>
        <FormControl className="disformtwo"
        placeholder="What Does Your Cat Enjoy?"
        type="text"
        name="enjoys"
        onChange={this.handleChange.bind(this)}
        value={this.state.form.enjoys}
        />
        <button id="submit" className="btn btn-info btn-lg" onClick={this.submitAndClear.bind(this)}>Create Cat Profile</button>
      </div>
    )
    }
  }
export default NewCat
