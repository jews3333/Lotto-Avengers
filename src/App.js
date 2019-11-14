import React, { Component } from 'react';
import './App.scss';

import Header from './layout/Header';
import LottoContainer from './containers/LottoContainer';

class App extends Component {

    render() {
        return (
            <div id='App'>
                <Header/>
                <LottoContainer/>
            </div>
        );
    }
}

export default App;