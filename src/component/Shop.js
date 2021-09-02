import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import NavSec from './NavSec';
import './Style/shop.scss';
import './Style/anim.css'

const Shop = ({products, filter, liked, addCarted, handleLikes, handleCards}) => {

    const [left, setLeft] = useState({left: '0px'})
    const [scroll, setScroll] = useState(false);

    function handlerScroll(){
        const offset = window.scrollY;

        if(offset > 200){
            setScroll(true)
        }
        else(
            setScroll(false)
        )
    }

    useEffect(() => {
        window.addEventListener('scroll', handlerScroll)
    })
    
    return (
        <section className='shop'>
            <NavSec />
            <Container className='py-56'>
                <div className='menu' id='top'>
                    <h4 onClick={() => {
                        setLeft({left: '0px'})
                        filter('all')
                        }}>
                            All
                    </h4>
                    <h4 onClick={() => {
                        setLeft({left: '100px'})
                        filter('men')
                        }}>
                            Mens
                        </h4>
                    <h4 onClick={() => {
                        setLeft({left: '200px'})
                        filter('women')
                        }}>
                            Women
                        </h4>
                    <span style={left} className='under-line'></span>
                </div>
            </Container>
            <Container>
                <Row className='pb-4'>
                    {products.map((product, index) => {
                        return(
                            <Col md='4' className='col' key={index}>
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
                                                addCarted(product)
                                                handleCards(product)
                                            }
                                        }}>
                                    </i>
                                    <i className={product.like ? `fas fa-heart add-like`: `far fa-heart add-like`}
                                        onClick={() => {
                                            liked(product);
                                            handleLikes(product)
                                        }} >
                                    </i>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
            <a href='#navbar' style={scroll ? {display: 'block'} : {display: 'none'}}>
                <i class="fas fa-chevron-up"></i>
            </a>
                <footer>
                    <div id='paginantion'>
                        <Pagination size="lg" aria-label="Page navigation example">
                            <PaginationItem>
                                <PaginationLink previous href="#" />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">
                                1
                                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">
                                2
                                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">
                                3
                                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink next href="#" />
                            </PaginationItem>
                        </Pagination>
                    </div>
                </footer>
        </section>
    )
}

export default Shop
