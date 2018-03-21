import * as React from 'react';
import './css/app.css';
import HeaderContainer from './Containers/HeaderContainer';
import TodoLayout from './Components/TodoLayout';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HeaderContainer />
        <TodoLayout />
      </div>
    );
  }
}

export default App;
