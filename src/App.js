import React from 'react';
import Header from "./components/Header/Header";
import Cards from "./components/Cards/Cards";
import Drawer from "./components/Drawer/Drawer";


function App() {
    const [cartOpened, setCartOpened] = React.useState(false);

    return (
        <div className="wrapper clear">
            { cartOpened && <Drawer onClose={ () => { setCartOpened(false) } } /> }
            <Header onClickCart={ () => { setCartOpened(true) } } />
            <Cards />
        </div>
    );
}

export default App;
