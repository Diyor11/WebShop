import React, { createContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cart from './component/Cart';
import Home from './component/Home';
import Shop from './component/Shop';
import './style.scss';
import { data } from './data';
import Likes from './component/Likes';
import CheckOut from './component/CheckOut';

export const Context = createContext(null);

const App = () => {

    const [cards, setCards] = useState([])
    const [likes, setLikes] = useState([]);
    const [animation, setAnimation] = useState({animationName: ''});
    const [money, setMoney] = useState(totalMoney())

    const [products, setProducts] = useState(data)

    const filter = (e) => {
        if(e === 'men'){
            setProducts(
                data.filter(product => product.who === 'men')
            )
            return;
        }
        if(e === 'women'){
            setProducts(
                data.filter(product => product.who === 'women')
            )
            return;
        }
        setProducts(data);
    }
    const liked = (e) =>{
        setProducts(
            products.map(product => {
                if(product.id === e.id){
                    product.like = !product.like;
                }
                return product;
            })
        )
    }

    const handleLikes = () => {
        setLikes(data.filter(product => product.like))
    }

    const addCarted = (e) =>{
        setProducts(
            products.map(product => {
                if(product.id === e.id){
                    product.cart = true;
                }
                return product;
            })
        )
    }

    const clearLikes = () =>{
        setLikes(
            likes.map(like => {
                if(like.like){
                    like.like = !like.like;
                }
                return like;
            })
        )
        setLikes([])
    }

    const  handleCards = (e) => {
        setCards(
                [...cards , e]
        )
        setMoney(money + e.price)
    }

    const emptyCard = () => {
        products.forEach(product => product.cart = false)
        setCards([])
        setMoney(0)
    }

    useEffect(() => {
        totalMoney()
    }, [cards])

    function totalMoney(){
        let i = 0;
        cards.forEach(product => i += (product.price * product.thing))
        return i;
    }

    const increment = (id) => {
        setCards(
            cards.map(product => {
                if(product.id === id){
                    product.thing++
                }
                return product;
            })
        )
        setMoney(totalMoney())
    }

    const decrement = (id) => {
        setCards(
            cards.map(product => {
                if(product.id === id && product.thing > 1){
                    product.thing--
                }
                return product;
            })
        )
        setMoney(totalMoney())
    }

    const cardFilter = (e) => {
        setCards(
            cards.filter(product => product.id !== e.id)
        )
        e.cart = !e.cart;
        setMoney(money - (e.price * e.thing))
    }
    return (
        <Context.Provider value={{likes, cards}}>
            <Router>
                <Switch>
                    <Route path='/' exact> <Home /> </Route>
                    <Route path='/shop'> <Shop 
                        products={products}
                        filter={filter}
                        liked={liked}
                        addCarted={addCarted}
                        animation={animation}
                        setAnimation={setAnimation}
                        handleLikes={handleLikes}
                        handleCards={handleCards}
                     /> </Route>
                    <Route path='/cart'> <Cart 
                        products={cards}
                        emptyCard={emptyCard}
                        money={money}
                        increment={increment}
                        decrement={decrement}
                        cardFilter={cardFilter}
                    /> </Route>
                    <Route path='/likes'> <Likes 
                        likes={likes}
                        clearLikes={clearLikes}
                        liked={liked}
                        addCarted={addCarted}
                        handleCards={handleCards}
                    /> </Route>
                    <Route path='/checkout'> <CheckOut money={money} setCards={setCards}/> </Route>
                </Switch>
            </Router>
        </Context.Provider>
    )
}

export default App;
