import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Navbar, Collapse, Nav, NavItem, Container
} from 'reactstrap';
import './Style/navbar.scss';
import { Context } from '../App';

const NavSec = () => {

    const [isOpen, setIsOpen] = useState(false);
    const {likes, cards} = useContext(Context);

    return (
        <>
        <Navbar expand='md' light id='navbar'>
            <Container className='z-index-1'> 
            <Link to='/' className='navbar-brand' >Web Shop</Link>
                <i className='fas fa-bars ' onClick={() => setIsOpen(!isOpen)}></i>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className='nav-links'>
                        <NavItem >
                            <Link to='likes' className='like'> <i className={`far fa-heart`}>
                                <span style={likes.length > 0 ? {display : 'block'} : {display : 'none'}}>
                                    {likes.length}
                                </span>
                            </i> </Link>
                        </NavItem>
                        <NavItem >
                            <Link to='/shop'>Shop</Link>
                        </NavItem>
                        <NavItem className='my-cart' >
                            <Link to='/cart'> my<b>Cart</b>
                                <i className="fas fa-shopping-cart">
                                    <span style={cards.length > 0 ? {display : 'block'} : {display : 'none'}}>
                                        {cards.length}
                                    </span>
                                </i> 
                            </Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
        </>
    )
}

export default NavSec;
