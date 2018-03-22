import * as React from 'react';
import './css/app.css';
import TodoLayout from './Components/TodoLayout';
import LoginContainer from './Containers/LoginContainer';

interface AppProps {
}
interface AppState {
  localSessionId: any;
}
class App extends React.Component<AppProps, AppState> {

  constructor(props: AppProps) {
    super(props);

    this.state = {
      localSessionId: localStorage.getItem('sessionItemId')
    };
  }
  render() {
    return (
      <div className="App">
        {!this.state.localSessionId &&
          <LoginContainer />
        }
        {this.state.localSessionId &&
          <TodoLayout />
        }
      </div>
    );
  }
}

export default App;
