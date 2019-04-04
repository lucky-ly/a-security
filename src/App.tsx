import * as React from 'react';

import 'normalize.css';
import './App.css';

import ContentContainer from './components/ContentContainer';
import Sidebar from './components/Sidebar/Sidebar';

class App extends React.Component {
  constructor(props: Readonly<{}>) {
    super(props);
  }

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
