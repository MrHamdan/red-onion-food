import React from 'react';
import './Lunch.css'

const Lunch = ({ lunch }) => {
    const { id, name, price, description, img } = lunch;
    return (
        <div className="col">
            <div className="card h-100 shadow-lg">
                <img src={img} className="card-img-top image-size mx-auto" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <h4>Price: {price}</h4>
                </div>
            </div>
        </div>
    );
};

export default Lunch;