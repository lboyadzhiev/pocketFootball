import './styles/App.scss';

import Navigation from './components/SectionsComponents/Navigation';
import Main from './components/Main';

function App() {
    return (
        <div className='app'>
            <Navigation />
            <Main />
        </div>
    );
}

export default App;
