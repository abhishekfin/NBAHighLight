import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';


// Components
import Header from './header';
import Footer from './footer';
import Home from './home';
import Team from './team';
import Teams from './teams';


class App extends Component {
  render() {
    return (
      <div>
       <BrowserRouter>
       <div>
       <Header/>
       <Route exact path="/" component={Home}></Route>
       <Route exact path="/teams" component={Teams}></Route>
       <Route exact path="/team/:id" component={Team}></Route>
       <Footer/>
       </div>
       </BrowserRouter>
      </div>
    );
  }
}

export default App;
