import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import Cats from './Components/Cats'
import NewCat from './Components/NewCat'
import { getCats, createCat, deleteCat } from './api'


class App extends Component {
  constructor(props){
  		super(props)
      this.state = {
        cats: []
      }
  	}

	componentWillMount() {
		getCats()
		.then(APIcats => {
			this.setState({
				cats: APIcats
			})
		})
	}

  deleteTheCat(id){
    deleteCat(id)
    .then(APIcats =>{
      this.setState({
        cats: APIcats
      })
    })
  }

  handleNewCat(newCatInfo) {
	createCat(newCatInfo)
    .then(successCat => {
      this.setState({
        cats: successCat
      })
        console.log("SUCCESS! New cat: ", successCat);
    })
}

  render() {
    return (
      <div>
        <Header />
        <Cats cats={this.state.cats}
        delete={this.deleteTheCat.bind(this)}
        />
        <NewCat kitty={this.handleNewCat.bind(this)}/>
      </div>
    );
  }
}


export default App;
