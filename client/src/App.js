import React from 'react';
import ReactDOM from 'react-dom';

import Navigation from './components/Navigation';
import Home from './components/Home';

function App() {
    return (
        <div className='app'>
            <Navigation />
            <Home />
        </div>
    );
}

export default App;
