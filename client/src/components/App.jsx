import React from 'react';
import GlobalCSS from '../styles/App.style';
import MainTitle from './MainTitle';
import Search from './Search';
import Results from './Results';

class App extends React.Component {
    constructor() {
        super();
        this.state = {};
    };

    render() {
        return (
            <GlobalCSS>
                <MainTitle />
                <Search />
                <Results />
            </GlobalCSS>
        );
    }
}

export default App;
