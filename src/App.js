import React, { Component } from 'react';

//components
import Footer from './components/footerComponent/footer';
import Container from './components/containerComponent/container';
import FormContainer from './components/formComponent/formContainer';

//includes
import './Assets/css/default.min.css';

class App extends Component {
  render() {
    return (
      <div className="App _initial_state">
        <Container></Container>
        <FormContainer></FormContainer>
        <Footer></Footer>
        
        
      </div>
    );
  }
}

export default App;
