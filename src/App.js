import React from 'react';
import axios from "axios";
import { Route, Switch } from 'react-router-dom';
import Header from "./components/Header/Header";
import Cards from "./components/Cards/Cards";
import Drawer from "./components/Drawer/Drawer";
import Favorite from "./components/Favorite/Favorite";


function App() {
    let [sneakers, setSneakers] = React.useState([]);
    let [cartSneakers, setCartSneakers] = React.useState([]);
    let [searchValue, setSearchValue] = React.useState('');
    const [cartOpened, setCartOpened] = React.useState(false);

    //Render Once
    React.useEffect(() => {
        axios.get('https://60e056b96b689e001788ca00.mockapi.io/items')
            .then(res => setSneakers(res.data));
        axios.get('https://60e056b96b689e001788ca00.mockapi.io/cart')
            .then(res => setCartSneakers(res.data));
    }, []);

    //Add To Cart
    const onAddToCart = (products) => {
        axios.post('https://60e056b96b689e001788ca00.mockapi.io/cart', products);
        setCartSneakers(prev => [...prev, products]);
    }

    //Remove Item From Cart
    const onRemoveItem = (id) => {
        axios.delete(`https://60e056b96b689e001788ca00.mockapi.io/cart/${ id }`);
        setCartSneakers(prev => prev.filter(item => item.id !== id));
    }

    //Search Input Handler
    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <div className={`wrapper clear`}>
            {
                cartOpened &&
                <Drawer
                    items={ cartSneakers }
                    onRemoveItem={ onRemoveItem }
                    onClose={ () => { document.body.classList.remove('body-fixed'); setCartOpened(false) } }
                />
            }
            <Header onClickCart={ () => {
                document.body.classList.add('body-fixed');
                setCartOpened(true) }
            } />
            <div className="content p-40">
                <Switch>
                    <Route exact path='/'>
                        <Cards
                            searchText={ searchValue }
                            changeValue={ onChangeSearchInput }
                            setSearchValue={ setSearchValue }
                            addCart={ onAddToCart }
                            sneakers={ sneakers }/>
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
