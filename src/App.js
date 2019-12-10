import React from "react";
import Home from "./pages/Home/Home";
import './styles/main.scss';

class App extends React.Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <>
        <Home />
      </>
    );
  }
}

export default App;
