import logo from '../src/img/sneakersLogo.png'

function App() {
    return (
        <div className="wrapper">
            <header>
                <div id="logo">
                    <img className='logoImage' src={ logo } alt=""/>
                    <h3>React Sneakers</h3>
                </div>
                <ul className='rightHeader'>
                    <li>
                        <svg/>
                        <span>500$</span>
                    </li>
                    <li>
                        <svg/>
                    </li>
                </ul>
            </header>

            <div className="content">
                <h2>All Sneakers</h2>
                ...
            </div>
        </div>
    );
}

export default App;
