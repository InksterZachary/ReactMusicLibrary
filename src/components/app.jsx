import React, { Component } from 'react';
import TitleBar from './TitleBar/titleBar';

class App extends Component {
    state = { }
    render() {
        return (
            <div className="text-center">
                <TitleBar />
            </div>
        );
    }
}

export default App;