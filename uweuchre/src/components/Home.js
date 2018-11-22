import React from 'react'
import Euchre from '../Euchre.jpg'

const Home = () => {
    return(
        <div className="container">
            <h4 className="center">Home</h4>
            <img src={Euchre} alt="Euchre"/>
        </div>
    );
}

export default Home