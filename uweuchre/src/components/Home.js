import React from 'react'
import Euchre from '../Euchre.jpg'

const Home = () => {
    return(
        <div className="container">
            <h4 className="center">Home</h4>
            <img src={Euchre} alt="Euchre"/>
            <p className="center pink">Created by JK and LO</p>
        </div>
    );
}

export default Home