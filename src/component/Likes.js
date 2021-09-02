import React, { useState } from 'react';
import { Row, Col, Container } from 'reactstrap';
import NavSec from './NavSec';
import './Style/likes.scss';
import './Style/anim.css';

const Likes = ({likes, clearLikes, addCarted, handleCards }) => {

    const [iconsColor, setIconsColor] = useState({list: 'black', grid: 'muted'})
    const [view, setView] = useState(4)

    return (
        <section id='likes'>
            <NavSec />
            <Container className='py-56'>
                <h1 className='likes-title'>
                    Favorites {window.innerWidth > 750 ? 'products': ''}
                </h1>
                <div className='sort'>
                    <h4>Favorites products {likes.length}</h4>
                    <div className='icons'>
                        <h5>List view :</h5>
                        <i className={`${iconsColor.list} fas fa-bars`} onClick={() => {
                            setIconsColor({list: 'muted', grid: 'black'});
                            setView(12)
                            }}>
                            <p>View list</p>
                        </i>
                        <i className={`${iconsColor.grid} fas fa-th`} onClick={() => {
                            setIconsColor({list: 'black', grid: 'muted'});
                            setView(4)
                            }}>
                            <p>View grid</p>
                        </i>
                        <button onClick={() => clearLikes()}>Clear <span>favorites</span></button>
                    </div>                    
                </div>
                <Row>
                    {likes.length < 0 ?'': likes.map((product, index) => {
                        return(
                            <Col md={view} key={index} className='col'>
                            <div className='box'>
                                <div className='img-wrapper'>
                                    <img src={product.img} alt={product.name} />
                                </div>
                                <div className='card-text'>
                                    <div className='card-info'>
                                        <h4>{product.name}</h4>
                                        <h5>{product.price} $</h5>
                                    </div>
                                    <p>{product.desc}</p>
                                </div>
                                <i className={product.cart ? `green carted fas fa-cart-plus add-cart` : `fas fa-cart-plus add-cart`}
                                    onClick={() => {
                                        if(!product.cart){
                                            addCarted(product);
                                            handleCards(product);
                                        }
                                    }}
                                    >
                                </i>
                                <i className={product.like ? `fas fa-heart add-like`: `far fa-heart add-like`}>
                                </i>
                            </div>
                        </Col>
                        )
                    })}
                </Row>
            </Container>
        </section>
    )
}

export default Likes;