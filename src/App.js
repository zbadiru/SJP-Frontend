import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import Merchandise from './components/Merchandise'
import About from './components/About'
import Contact from './components/Contact'
import Authorized from './components/Authorized';
import Unauthorized from './components/Unauthorized';
import Error404 from "./components/Error404"
import API from './API'
import SignIn from './components/SignIn';
import ImageCollection from './containers/ImageCollection'


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      username: null,
      imageCollection: []
    }
  }

  componentDidMount(){
    if(localStorage.token){
      API.validate(localStorage.token)
      .then(json => this.signIn(json.username, json.token))
    }
    API.getImages().then((imageCollection) => this.setState({ imageCollection }))
  }

  signIn = (username, token) =>{
    this.setState({
      username
    })
    localStorage.token = token
  }

  signOut = () => {
    this.setState({
      username: null
    })
    localStorage.removeItem("token")
  }
  render(){
  return (
    <Router>
      <Switch>
        
      <div className="App">
      <Navbar username={this.state.username} signOut={this.signOut} />
      <h1>{this.state.username ? `Welcome back, ${this.state.username}` : null}</h1>
            <Route exact path='/sign-in' render={(props) => <SignIn {...props} signIn={this.signIn}/>} />
            <Route exact path='/' component={Home}/>
            <Route exact path='/portfolio' render={(props) => (
              <>
            <Portfolio {...props} imageCollection={this.state.imageCollection}/>
            <ImageCollection {...props} imageCollection={this.state.imageCollection} /> </>)  }/>
            <Route exact path='/images'  />
            <Route exact path='/merchandise' component={Merchandise}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/contact' component={Contact}/>
            {/* <ImageCollection imageCollection={this.state.imageCollection} /> */}
      </div>
      </Switch>
    </Router>
  );
  }
}

export default App;
