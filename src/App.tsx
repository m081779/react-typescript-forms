import * as React from 'react';
import './App.css';
import {Form} from './components/Form';

interface IProps {}

class App extends React.Component<IProps> {
  render() {
    return(
      <div>
        <Form />
      </div>
    );
  }
}

export default App;
