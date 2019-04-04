import * as React from 'react';
import './App.css';
import ContentContainer from './components/ContentContainer';
import Sidebar from './components/Sidebar';

class App extends React.Component {
  public render() {
    return (
      <div>
        <Sidebar/>
        <ContentContainer/>
      </div>
    );
  }
}

export default App;
