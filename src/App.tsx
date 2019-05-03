import * as React from 'react';

import 'normalize.css';
import './App.css';

import Content from './components/Content/Content';
import { Preloader } from './components/Content/Preloader';
import { MainMenu, Sidebar } from "./components/Sidebar";
import { PreloaderManager } from './data-management/PreloaderManager';

interface IAppState {
    isLoaded: boolean;
    currentPageUrl?: string;
}

class App extends React.Component<Readonly<{}>, IAppState> {
    private dataLoader: PreloaderManager;
    constructor(props: Readonly<{}>) {
        super(props);

        this.dataLoader = new PreloaderManager();
        this.dataLoader.onDataLoaded((e) => this.setState({isLoaded: true}));
        this.dataLoader.loadData(4000);

        this.state = {
            isLoaded: false
        };
    }

      public render() {
        return (
            <React.Fragment>
                <Content isLoaded={this.state.isLoaded}/>
                <Preloader isLoaded={this.state.isLoaded}/>
                <Sidebar isLoaded={this.state.isLoaded}>
                    <MainMenu/>
                </Sidebar>
            </React.Fragment>
        );
    }
}

export default App;
