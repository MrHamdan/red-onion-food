import React from 'react';
import image1 from '../../../images/adult-blur-blurred-background-687824.png';
import image2 from '../../../images/chef-cook-food-33614.png';
import image3 from '../../../images/architecture-building-city-2047397.png';
import logo1 from '../../../images/Group 204.png'
import logo2 from '../../../images/Group 1133.png'
import logo3 from '../../../images/Group 245.png'
import { Link } from 'react-router-dom';

const Chooseus = () => {
    return (
        <div className="container pt-5 pb-5 col-12">
            <div className="w-50 pt-5 pb-5">
                <h1 className="text-left mx-5">Why you choose us</h1>
                <p className="text-left mx-5">Barton waited twenty always repair in within we do.An delighted offending curiosity my is dashwoods at. Boy propose increasing sourrounded </p>
            </div>
            <div>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card h-100 mx-5">
                            <img src={image1} className="card-img-top" alt="..." />
                            <div className="card-body d-flex">
                                <div>
                                    <img className="w-20" src={logo1} alt="" />
                                </div>
                                <div className="mx-3">
                                    <h5 className="card-title text-left">Fast Delivery</h5>
                                    <p className="card-text text-left">Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future.</p>
                                    <Link to="/">See more</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 mx-5">
                            <img src={image2} className="card-img-top" alt="..." />
                            <div className="card-body d-flex">
                                <div>
                                    <img className="w-20" src={logo2} alt="" />
                                </div>
                                <div className="mx-3">
                                    <h5 className="card-title text-left">A Good Auto Responder</h5>
                                    <p className="card-text text-left">Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future.</p>
                                    <Link to="/">See more</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 mx-5">
                            <img src={image3} className="card-img-top" alt="..." />
                            <div className="card-body d-flex">
                                <div>
                                    <img className="w-20" src={logo3} alt="" />
                                </div>
                                <div className="mx-3">
                                    <h5 className="card-title text-left">Home Delivery</h5>
                                    <p className="card-text text-left">Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future.</p>
                                    <Link to="/">See more</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chooseus;