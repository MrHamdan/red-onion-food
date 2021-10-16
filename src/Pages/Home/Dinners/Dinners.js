import React, { useEffect, useState } from 'react';
import Dinner from '../Dinner/Dinner';

const Dinners = () => {
    const [dinners, setDinners] = useState([])
    useEffect(() => {
        fetch('dinner.json')
            .then(res => res.json())
            .then(data => setDinners(data))
    }, [])
    return (
        <div className="container">
            <div id="dinner" className="row row-cols-1 row-cols-md-3 g-4">
                {
                    dinners.map(dinner => <Dinner
                        key={dinner.id}
                        dinner={dinner}
                    ></Dinner>)
                }
            </div>
        </div>
    );
};

export default Dinners;