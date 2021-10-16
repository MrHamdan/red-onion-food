import React, { useEffect, useState } from 'react';
import Breakfast from '../Breakfast/Breakfast';

const Breakfasts = () => {
    const [breakfasts, setBreakfasts] = useState([])
    useEffect(() => {
        fetch('breakfast.json')
            .then(res => res.json())
            .then(data => setBreakfasts(data))
    }, [])
    return (
        <div className="container">
            <div id="breakfast" className="row row-cols-1 row-cols-md-3 g-4">
                {
                    breakfasts.map(breakfast => <Breakfast
                        key={breakfast.id}
                        breakfast={breakfast}
                    ></Breakfast>)
                }
            </div>
        </div>
    );
};

export default Breakfasts;