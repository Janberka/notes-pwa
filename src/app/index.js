import React, { Component } from 'react';
import { Box } from 'grid-styled'; 
import Header from './components/ui/header'

import Notes from './components/notes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header sticky>
          <Box>Notes</Box>
        </Header>
        <Notes/>
      </div>
    );
  }
}

export default App;