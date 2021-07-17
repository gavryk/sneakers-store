import React from 'react';
import axios from "axios";
import { Route, Switch } from 'react-router-dom';
import Header from "./components/Header/Header";
import Drawer from "./components/Drawer/Drawer";
import Favorite from "./pages/Favorite/Favorite";
import Orders from "./pages/Orders/Orders";
import Home from "./pages/Home/Home";
import {CSSTransition} from "react-transition-group";
import AppContext from "./context";

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
    //Loading
    const [isLoading, setIsLoading] = React.useState(true);

    //Render Once
    React.useEffect(() => {
        async function fetchData() {
            const cartResp = await axios.get(`${ apiURL }/cart`);
            const favoriteResp = await axios.get(`${ apiURL }/favorite`);
            const sneakerResp = await axios.get(`${ apiURL }/items`);

            setIsLoading(false);

            setCartSneakers(cartResp.data);
            setLikedSneakers(favoriteResp.data);
            setSneakers(sneakerResp.data);
        }

        fetchData();
    }, []);

    //Add To Cart
    const onAddToCart = (products) => {
        try {
            const findItem = cartSneakers.find(item => Number(item.parentId) === Number(products.id));
            if (findItem) {
                axios.delete(`${ apiURL }/cart/${ products.id }`);
                setCartSneakers(prev => prev.filter(item => Number(item.id) !== Number(products.id)));
            } else {
                axios.post(`${ apiURL }/cart`, products);
                setCartSneakers(prev => [...prev, products]);
            }
        } catch(err) {

        }
    }

    //Remove Item From Cart
    const onRemoveItem = (id) => {
        axios.delete(`${ apiURL }/cart/${ id }`);
        setCartSneakers(prev => prev.filter(item => Number(item.id) !== Number(id)));
    }

    //Search Input Handler
    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    };

    //Add Favorite Product
    const onAddFavorite = async (products) => {
       try {
           if (likedSneakers.find( favProd => Number(favProd.id) === Number(products.id ))) {
               axios.delete(`${ apiURL }/favorite/${products.id}`);
               setLikedSneakers(prev => prev.filter(item => Number(item.id) !== Number(products.id)));
           } else {
               let { data } = await axios.post(`${ apiURL }/favorite`, products);
               setLikedSneakers( prev => [...prev, data] );
           }
       } catch(error) {
           alert('failed to add favorites');
       }
    };

    const isSneakersAdded = (id) => {
        return cartSneakers.some( (item) => Number(item.parentId) === Number(id));
    }
    //Open/Close Cart
    const handleCart = () => {
        document.body.classList.toggle('body-fixed');
        setCartOpened(!cartOpened);
    }

    return (
        <AppContext.Provider value={{
            apiURL,
            sneakers,
            cartSneakers,
            setCartSneakers,
            likedSneakers,
            isSneakersAdded,
            onAddFavorite,
            handleCart,
            onAddToCart,
            cartOpened
        }}>
            <div className={`wrapper clear ${ cartOpened ? 'overlay' : '' }`}>
                {/*<CSSTransition in={ cartOpened } timeout={200} classNames="fade" unmountOnExit>*/}
                {/*    <Drawer*/}
                {/*        items={ cartSneakers }*/}
                {/*        onRemoveItem={ onRemoveItem }*/}
                {/*    />*/}
                {/*</CSSTransition>*/}
                <Drawer
                    items={ cartSneakers }
                    onRemoveItem={ onRemoveItem }
                />
                <Header />
                <Switch>
                    <Route exact path='/'>
                        <Home
                            searchText={ searchValue }
                            changeValue={ onChangeSearchInput }
                            setSearchValue={ setSearchValue }
                            addFavorite={ onAddFavorite }
                            sneakers={ sneakers }
                            isLoading={ isLoading }
                        />
                    </Route>
                    <Route path='/favorite'>
                        <Favorite />
                    </Route>
                    <Route path='/orders'>
                        <Orders />
                    </Route>
                </Switch>
            </div>
        </AppContext.Provider>
    );
}

export default App;
