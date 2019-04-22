import * as React from 'react';

import 'normalize.css';
import './App.css';

import Content from './components/Content/Content';
import { MainMenu, Sidebar } from "./components/Sidebar";

interface IAppState {
  isLoaded: boolean;
}

class App extends React.Component<Readonly<{}>, IAppState> {
  constructor(props: Readonly<{}>) {
    super(props);

    this.state = {
      isLoaded: false
    };
  }

    public render() {
    return (
      <React.Fragment>
        <Content isLoaded={this.state.isLoaded}/>
        <Sidebar isLoaded={this.state.isLoaded}>
          <MainMenu/>
        </Sidebar>
      </React.Fragment>
    );
  }
}

export default App;
