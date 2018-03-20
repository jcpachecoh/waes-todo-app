import * as React from 'react';
import './App.css';
import Header from './Components/Header';
import TodoLayout from './Components/TodoLayout';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TodoLayout />
      </div>
    );
  }
}

export default App;
