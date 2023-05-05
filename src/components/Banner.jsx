/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("images/banner.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    {/* <h1 className="mb-5 text-5xl font-bold md:text-7xl"> */}
                    <Marquee>
                    <h1 className="mb-5 text-5xl font-bold md:text-7xl">Welcome..</h1>
                    </Marquee>
                    {/* </h1> */}
                    <p className="mb-5 text-4xl">No matter how you cook, Yumma has many the recipes</p>
                    <Link  className='btn btn-primary text-base'>Explore Recipes <FontAwesomeIcon icon="fa-solid fa-utensils" className='ps-1'/></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;
