import React from 'react';
import axios from "axios";
import { Route, Switch } from 'react-router-dom';
import Header from "./components/Header/Header";
import Drawer from "./components/Drawer/Drawer";
import Favorite from "./pages/Favorite/Favorite";
import Orders from "./pages/Orders/Orders";
import Home from "./pages/Home/Home";
// import {CSSTransition} from "react-transition-group";
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
    //App Theme
    const [darkTheme, setDarkTheme] = React.useState(false);

    //Render Once
    React.useEffect(() => {
        async function fetchData() {
            try {
                //not always good, as we expect that all the promises will end.
                //but in my case everything will be ok
                const [cartResp, favoriteResp, sneakerResp] = await Promise.all([
                    axios.get(`${ apiURL }/cart`),
                    axios.get(`${ apiURL }/favorite`),
                    axios.get(`${ apiURL }/items`)
                ]);

                setIsLoading(false);

                setCartSneakers(cartResp.data);
                setLikedSneakers(favoriteResp.data);
                setSneakers(sneakerResp.data);
            } catch (err) {
                alert('Error');
                console.error(err);
            }
        }

        fetchData();

        //Get LocalStorage Theme
        const json = localStorage.getItem("dark");
        const currentMode = JSON.parse(json);
        currentMode && setDarkTheme(!darkTheme);

    }, []);

    //Set Theme
    React.useEffect(() => {
        darkTheme ? document.body.classList.add("dark") : document.body.classList.remove("dark");
        const json = JSON.stringify(darkTheme);
        localStorage.setItem("dark", json);
    }, [darkTheme]);

    //Add To Cart
    const onAddToCart = async (products) => {
        try {
            const findItem = cartSneakers.find(item => Number(item.parentId) === Number(products.id));
            if (findItem) {
                await axios.delete(`${ apiURL }/cart/${ findItem.id }`);
                setCartSneakers(prev => prev.filter(item => Number(item.parentId) !== Number(products.id)));
            } else {
                setCartSneakers((prev) => [...prev, products]);
                const { data } = await axios.post(`${ apiURL }/cart`, products);

                setCartSneakers((prev) =>
                    prev.map((item) => {
                        if (item.parentId === data.parentId) {
                            return {
                                ...item,
                                id: data.id,
                            };
                        }
                        return item;
                    }),
                );
            }
        } catch(err) {
            console.error(err);
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

    //Toggle Theme
    const toggleTheme = () => {
        setDarkTheme(!darkTheme);
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
            cartOpened,
            darkTheme,
            toggleTheme
        }}>
            <div className={`wrapper clear ${ cartOpened ? 'overlay' : '' }${ darkTheme ? 'dark-wrapper' : '' }`}>
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
