import React from 'react';
import "./About.css";
import { Link, useNavigate } from 'react-router-dom';

export default function About() {
    const navigate = useNavigate()

    const searchRestrauntHandler = () => {
        navigate("/")
    }
    
    return (
        <>
            <div className="navbar">
                <div className='logo-side'>
                    <div className='logo-container'>
                        <img className='logo-img' src='https://www.foodpanda.com/wp-content/uploads/2024/05/foodpanda-logo-RGB-horizontal.webp' alt='logo' />
                    </div>
                </div>

                <div className='nav-btns'>
                    <div>
                        <button className='login-btn'>log in</button>
                        <button className='signup-btn'>sign up</button>
                        <button className='lang-btn'><i className="fa-solid fa-globe" />EN</button>
                        <div className='cart-btn'><i className="fa-solid fa-basket-shopping" /></div>
                    </div>
                </div>
            </div>

            <div className='hero-section'>
                <div className='hero-sec-1'>
                    <b>It's the food and groceries you love,
                        <br />
                        delivered</b>
                    <div className='input-box'>
                        <input
                            placeholder='Your street and street number' />
                        <button>Find food</button>
                    </div>
                </div>
                <div className='hero-sec-2'>
                    <img src='https://images.deliveryhero.io/image/foodpanda/homepage/refresh-hero-home-pk.png?width=1264' alt='image' />
                </div>
            </div>

            <div className='hero-sec-part-2'>
                <p>You prepare the food, we handle the rest</p>
                <div>
                    <div className='hero-sec-part-2-overlap-box'>
                        <h3>List your restaurant or shop on foodpanda</h3>
                        <br />
                        Would you like millions of new customers to enjoy your amazing food and groceries? So would we!
                        <br />
                        <br />
                        It's simple: we list your menu and product lists online, help you process orders, pick them up, and deliver them to hungry pandas – in a heartbeat!
                        <br />
                        <br />
                        Interested? Let's start our partnership today!
                        <br />
                        <br />
                        <button onClick={searchRestrauntHandler}>Get Started</button>
                    </div>
                </div>
            </div>

            <div className='hero-sec-part-3'>
                <p>Find us in these cities and many more!</p>

                <div>
                    <div>
                        <div>Islamabad</div>
                    </div>
                    <div>
                        <div>Karachi</div>
                    </div>
                    <div>
                        <div>Lahore</div>
                    </div>
                    <div>
                        <div>Faisalabad</div>
                    </div>
                </div>
            </div>

            <div className='footer'>
                <div className='left-footer'>
                    <img src='https://www.foodpanda.com/wp-content/uploads/2024/05/foodpanda-logo-RGB-horizontal.webp' alt='logo' />
                </div>
                <div className='right-footer'>
                    <div>
                        <Link to="/instagram"><i className="fa-brands fa-instagram"></i></Link>
                    </div>
                    <div>
                        <Link to="/instagram"><i className="fa-brands fa-facebook-f"></i></Link>
                    </div>
                </div>
            </div>

        </>
    )
}
