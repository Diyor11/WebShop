import React, { useState } from 'react';
import { Link, useHistory} from 'react-router-dom';
import NavSec from './NavSec';
import './Style/checkout.scss'

const CheckOut = ({money, setCards}) => {

    const history = useHistory();

    const date =new Date();
    const [formed, setFormed] = useState(false)
    const [name, setName] = useState('')
    const [city, setCity] = useState('')
    const [cartNum, setCartnum] = useState('')

    const defaultText = (e) =>{
        e.preventDefault();
        setFormed(prev => !prev)
        if(money === 0)history.push('/shop')
        setCards(prev => {
            prev.forEach(product => {
                product.cart = false;
            });
            return [];
        })
    }

    return(
        <>
            <NavSec /> 
            <div className='grid'>
                {formed ? 
                <div className='check'>
                    <h2>WebShop</h2>
                    <p>Time: {date.getDay()}/
                        {date.getDate()<10? '0'+date.getDate() :date.getDate()}/
                        {date.getFullYear()}  {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}
                    </p>
                    <p>Numbre check: {Math.round((Math.random() * 100000000))}</p>
                    <p>Your cart number: {cartNum}</p>
                    <p>Paid : {money} $</p>
                    <p>Call canter: +1 756 563 21</p>
                    <p>City from : NewYork<br/>City to: {city}</p>
                    <p className='under-b'>Web site: https://webshop.com</p>
                    <p>
                        {name} your order is two weeks
                        will be delivered within !
                    </p>
                </div> 
                :
                <form onSubmit={defaultText}>
                    <input type='text' placeholder='firstname' onChange={(e) => setName(e.target.value)} required />
                    <input type='text' placeholder='lastname' required/>
                    <input type='text' placeholder='Address line' required/>
                    <input type='email' placeholder='e-mail' required />
                    <input type="number" placeholder='your card number' required onChange={e => setCartnum(e.target.value)}/>
                    <input type='text' placeholder='Country' required/>
                    <input type="tel" required placeholder='phone number' />
                    <input type='text' placeholder='City' required onChange={e => setCity(e.target.value)}/>
                    <div className='buttons'>
                        <Link to='/cart'>Back Card</Link>
                        <button>Next</button>
                    </div>
                </form>
                }
            </div>
        </>
    )
}

export default CheckOut;