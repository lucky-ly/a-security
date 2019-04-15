import * as React from 'react';

import 'normalize.css';
import './App.css';

import Content from './components/Content/Content';
import MainMenu from './components/Sidebar/MainMenu';
import Sidebar from './components/Sidebar/Sidebar';

class App extends React.Component {
  constructor(props: Readonly<{}>) {
    super(props);
  }

    public render() {
    return (
      <React.Fragment>
        <Sidebar>
          <MainMenu/>
        </Sidebar>
        <Content/>
      </React.Fragment>
    );
  }
}

export default App;
