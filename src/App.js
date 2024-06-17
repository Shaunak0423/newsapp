
import './App.css';

import React, { Component } from 'react'
import Navnar from './components/Navnar';
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <div>
       <Navnar/>
       <News pageSize = {5}/>
      </div>
    )
  }
}




