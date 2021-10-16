import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner-image">
            <div className="container pt-48">
                <div className="banner-container">
                    <h1 className="text-5xl">Best Food Waiting For Your Belly</h1>
                </div>
                <div>
                    <form className="search pt-4 mx-auto">
                        <input className="form-control me-2 rounded-pill px-4 p-3" type="search" placeholder="Search Food Items" aria-label="Search" />
                        <button className="btn btn-danger rounded-pill px-4" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Banner;