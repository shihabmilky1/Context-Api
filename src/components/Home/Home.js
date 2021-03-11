import React, { useContext } from 'react';
import { cetagoryContext } from '../../App';
import Cetagory from '../Cetagory/Cetagory';

const Home = () => {
    const category = useContext(cetagoryContext);
    return (
        <div>
            <h1>this is Home :{category}</h1>
            <Cetagory></Cetagory>
        </div>
    );
};

export default Home;