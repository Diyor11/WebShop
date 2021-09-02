import React from 'react'
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap'
import NavSec from './NavSec';
import './Style/cart.scss';

const Cart = ({products, emptyCard, money, increment, decrement, cardFilter}) => {

    return (
        <section className='cart'>
            <NavSec />
            <Container className='py-56'>
                <div className='card-menu'>
                    <h1>Subtotal: <span>$ {products.length>0 ? money.toFixed(2): 0}</span></h1>
                    <div className='buttons'>
                        <button onClick={() => emptyCard()}>EMPTY CART</button>
                        <Link to={money>0 ? '/checkout': '/shop'}>
                            <button>CHECKOUT</button>
                        </Link>
                    </div>
                </div>
                <h1 className='card-title'>Your <span>shopping</span> Card</h1>
                <Row>
                    {products.map((product, index) => {
                        return(
                            <Col className='col-card' key={index}>
                                <div className='card-box'>
                                    <img src={product.img} alt={product.name} />
                                    <div className='text-wrap'>
                                        <div className='card-info'>
                                            <h4>{product.name}</h4>
                                            <h5>$ {product.price}</h5>
                                        </div>
                                        <div className='control'>
                                            <div className='num'>
                                                <span onClick={() => decrement(product.id)}>-</span>
                                                <span>{product.thing}</span>
                                                <span onClick={() => increment(product.id)}>+</span>
                                            </div>
                                            <button onClick={() => cardFilter(product)}>
                                                REMOVE <i class="fas fa-trash-alt"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </section>
    )
}

export default Cart
