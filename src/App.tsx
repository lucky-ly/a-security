import * as React from 'react';

import 'normalize.css';
import './App.css';

import ContentContainer from './components/ContentContainer';
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
        <ContentContainer/>
      </React.Fragment>
    );
  }
}

export default App;
