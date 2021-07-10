import React from 'react';
import axios from "axios";
import { Route, Switch } from 'react-router-dom';
import Header from "./components/Header/Header";
import Drawer from "./components/Drawer/Drawer";
import Favorite from "./pages/Favorite/Favorite";
import Home from "./pages/Home/Home";


function App() {
    //DB Link
    let apiURL = 'https://60e056b96b689e001788ca00.mockapi.io';
    //All Products hook
    let [sneakers, setSneakers] = React.useState([]);
    //Cart Products Hook
    let [cartSneakers, setCartSneakers] = React.useState([]);
    //Search Product Hook
    let [searchValue, setSearchValue] = React.useState('');
    //Cart Opened Hook
    const [cartOpened, setCartOpened] = React.useState(false);
    //Favorite Hook
    const [likedSneakers, setLikedSneakers] = React.useState([]);

    //Render Once
    React.useEffect(() => {
        axios.get(`${ apiURL }/items`)
            .then(res => setSneakers(res.data));
        axios.get(`${ apiURL }/cart`)
            .then(res => setCartSneakers(res.data));
        axios.get(`${ apiURL }/favorite`)
            .then(res => setLikedSneakers(res.data));
    }, []);

    //Add To Cart
    const onAddToCart = (products) => {
        axios.post(`${ apiURL }/cart`, products);
        setCartSneakers(prev => [...prev, products]);
    }

    //Remove Item From Cart
    const onRemoveItem = (id) => {
        axios.delete(`${ apiURL }/cart/${ id }`);
        setCartSneakers(prev => prev.filter(item => item.id !== id));
    }

    //Search Input Handler
    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    };

    //Add Favorite Product
    const onAddFavorite = async (products) => {
        if (likedSneakers.find( favProd => favProd.id === products.id )) {
            axios.delete(`${ apiURL }/favorite/${products.id}`);
        } else {
            let { data } = await axios.post(`${ apiURL }/favorite`, products);
            setLikedSneakers( prev => [...prev, data] );
        }
    }

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
            <Switch>
                <Route exact path='/'>
                    <Home
                        searchText={ searchValue }
                        changeValue={ onChangeSearchInput }
                        setSearchValue={ setSearchValue }
                        addCart={ onAddToCart }
                        addFavorite={ onAddFavorite }
                        sneakers={ sneakers }
                    />
                </Route>
                <Route path='/favorite'>
                    <Favorite
                        isFavorite={ true }
                        items={ likedSneakers }
                        addFavorite={ onAddFavorite } />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
