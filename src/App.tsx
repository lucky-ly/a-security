import * as React from 'react';

import 'normalize.css';
import './App.css';

import Content from './components/Content/Content';
import { MainMenu, Sidebar } from "./components/Sidebar";

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
