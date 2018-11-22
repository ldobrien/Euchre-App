import React, { Component } from 'react';
import Home from './components/Home';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Players from './components/Players';
import Games from './components/Games';
import Navbar from './components/Navbar';
import Player from './components/Player';
import AddPlayer from './components/AddPlayer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/players" component={Players}/>
          <Route path="/games" component={Games} />
          <Route path="/players/:player_id" component={Player} />
          <Route path="/add" component={AddPlayer} />
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
