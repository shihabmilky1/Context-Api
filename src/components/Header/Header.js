import React, { useContext, useState } from 'react';
import { cetagoryContext } from '../../App';

const Header = () => {
    const [category,setCategory] = useContext(cetagoryContext);
    return (
        <div>
            <h1>this is Header : {category}</h1>
            <button onClick={() => setCategory('Laptop')}>Laptop</button>
            <button onClick={() => setCategory('Mobile')}>Mobile</button>
            <button onClick={() => setCategory('Camera')}>Camera</button>
        </div>
    );
};

export default Header;