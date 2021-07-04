import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from "./components/Header/Header";
import Cards from "./components/Cards/Cards";
import Drawer from "./components/Drawer/Drawer";
import Favorite from "./components/Favorite/Favorite";


function App() {
    let [sneakers, setSneakers] = React.useState([]);
    let [cartSneakers, setCartSneakers] = React.useState([]);
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

    const onAddToCart = (products) => {
        setCartSneakers(prev => [...prev, products]);
    }

    return (
        <div className="wrapper clear">
            { cartOpened && <Drawer items={ cartSneakers } onClose={ () => { setCartOpened(false) } } /> }
            <Header onClickCart={ () => { setCartOpened(true) } } />
            <div className="content p-40">
                <Switch>
                    <Route exact path='/'>
                        <Cards addCart={ onAddToCart } sneakers={ sneakers }/>
                    </Route>
                    <Route path='/favorite'>
                        <Favorite />
                    </Route>
                </Switch>
            </div>
        </div>
    );
}

export default App;
