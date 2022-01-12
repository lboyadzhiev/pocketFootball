function App() {
    return (
        <div className='App'>
            <Navigation />
        </div>
    );
}

const Navigation = () => {
    return (
        <nav className='nav'>
            <ul>
                <li>
                    <a href='#'>My Games</a>
                </li>
                <li>
                    <a href='#'>Publick Games</a>
                </li>
                <li>
                    <a href='#'>Pocket FEED</a>
                </li>
                <li>
                    <a href='#'>Tournaments</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href='#'>Welcome Email Adress</a>
                </li>
                <li>
                    <a href='#'>Logout</a>
                </li>
            </ul>
        </nav>
    );
};

export default App;
