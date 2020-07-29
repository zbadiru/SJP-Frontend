import React, {useState, useEffect, useContext} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import Product from './components/Product'
import ProductList from './components/ProductList'
import About from './components/About'
import Contact from './components/Contact'
import Authorized from './components/Authorized';
import Unauthorized from './components/Unauthorized';
// import Error404 from "./components/Error404"
import API from './API'
import SignIn from './components/SignIn';
import ImageCollection from './containers/ImageCollection'
import Upload from './components/Upload'
import 'bootstrap/dist/css/bootstrap.min.css';
import {ProductConsumer} from './context'
import Cart from './components/Cart/Cart';




function App() {
      const [username, setUsername] = useState(null)
      const [imageCollection, setImageCollection] = useState([])
    
  const addImageToImageCollection = (image) => {
    setImageCollection([...imageCollection, image]) 
  }

  useEffect(() => {
    if(localStorage.token){
      API.validate(localStorage.token)
      .then(json => signIn(json.username, json.token))
    }
    API.getImages().then((imageCollection) => setImageCollection(imageCollection))
  },[])

  const signIn = (username, token) =>{
    setUsername(username)
    localStorage.token = token
  }

  const signOut = () => {
    setUsername(null)
    localStorage.removeItem("token")
  }
  
  return (<>
      <Navbar username={username} signOut={signOut} />
      <Switch> 
        <div className="App">
        <h1>{username ? `Welcome back, ${username}` : null}</h1>
            <Route exact path='/sign-in' render={(props) => <SignIn {...props} signIn={signIn}/>} />
            <Route exact path='/' render={routerProps => <Home />}/>
            <Route exact path='/portfolio' render={(props) => (<>
              <Portfolio 
                {...props} 
                imageCollection={imageCollection}
                addImageToImageCollection={addImageToImageCollection}
                username={username}
              />
              <ImageCollection {...props} imageCollection={imageCollection} />
            </>)}/>
            <Route exact path='/images'  />
            <Route exact path='/products' component={ProductList}/>
            {/* <Route exact path='/products' component={Product}/> */}
            <Route path='/cart' component={Cart}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/contact' component={Contact}/>
            {/* <ImageCollection imageCollection={this.state.imageCollection} /> */}
        </div>
      </Switch>
    </>);
}

export default App;
