import React from 'react'
import Euchre from '../Euchre.jpg'
import './Home.css'

const Home = () => {
    return(
        <div className="container center">
            <img className="mainImage" src={Euchre} alt="Euchre"/>
        </div>
    );
}

export default Home