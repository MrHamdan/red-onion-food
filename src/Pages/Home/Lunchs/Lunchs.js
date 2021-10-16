import React, { useEffect, useState } from 'react';
import Lunch from '../Lunch/Lunch';
import './Lunchs.css'

const Lunchs = () => {
    const [lunchs, setLunchs] = useState([])
    useEffect(() => {
        fetch('lunch.json')
            .then(res => res.json())
            .then(data => setLunchs(data))
    }, [])
    return (
        <div className="container">
            <div id="lunch" className="row row-cols-1 row-cols-md-3 g-4">
                {
                    lunchs.map(lunch => <Lunch
                        key={lunch.id}
                        lunch={lunch}
                    ></Lunch>)
                }
            </div>
        </div>
    );
};

export default Lunchs;