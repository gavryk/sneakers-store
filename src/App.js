import React from 'react';
import Header from "./components/Header/Header";
import Cards from "./components/Cards/Cards";
import Drawer from "./components/Drawer/Drawer";


function App() {
    let [sneakers, setSneakers] = React.useState([])
    const [cartOpened, setCartOpened] = React.useState(false);

    React.useEffect(() => {
        fetch('https://60e056b96b689e001788ca00.mockapi.io/items')
            .then(res => {
                return res.json();
            })
            .then(json => {
                setSneakers(json);
            })
    }, []);

    return (
        <div className="wrapper clear">
            { cartOpened && <Drawer onClose={ () => { setCartOpened(false) } } /> }
            <Header onClickCart={ () => { setCartOpened(true) } } />
            <Cards sneakers={ sneakers }/>
        </div>
    );
}

export default App;
