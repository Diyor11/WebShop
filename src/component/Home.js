import React from 'react'
import NavSec from './NavSec';
import './Style/home.scss';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import shop1 from './asstets/shop1.jpg'
import shop2 from './asstets/shop2.jpg'
import shop3 from './asstets/shop3.jpg'
import shop4 from './asstets/shop4.jpg'

const Home = () => {
    return (
        <header>
            <NavSec />
            <Container className='container-c'>
            <div className='row-c'>
                <div className='left-side'>
                    <h1>Shopping</h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Ex repellat dolores molestiae veritatis unde eius ipsum.
                    repellat dolores molestiae veritatis unde eius ipsum. and some
                    new advenve
                    </p>
                    <Link to='/shop'>Go shopping</Link>
                </div>
                <div className='right-side'>
                    <div className='box-wrapper'>
                        <div className='box'>
                            <div className='text-box'>
                                <h3>Vip Brand</h3>
                                <p>
                                    Ex repellat dolores molestiae veri    
                                </p>
                            </div>
                            <img src={shop1} alt='img'/>
                        </div>
                        <div className='box'>
                            <div className='text-box'>
                                <h3>Realex</h3>
                                <p>
                                    Ex repellat dolores molestiae veri    
                                </p>
                            </div>
                            <img src={shop2} alt='img'/>
                        </div>
                        <div className='box'>
                            <div className='text-box'>
                                <h3>Real city</h3>
                                <p>
                                    Ex repellat dolores molestiae veri    
                                </p>
                            </div>
                            <img src={shop3} alt='img'/>
                        </div>
                        <div className='box'>
                            <div className='text-box'>
                                <h3>Brand shop</h3>
                                <p>
                                    Ex repellat dolores molestiae veri    
                                </p>
                            </div>
                            <img src={shop4} alt='img'/>
                        </div>
                    </div>
                </div>
            </div>
            </Container>
        </header>
    )
}

export default Home
