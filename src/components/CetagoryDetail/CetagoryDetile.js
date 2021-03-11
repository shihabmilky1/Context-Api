import React, { useContext } from 'react';
import { cetagoryContext } from '../../App';

const CetagoryDetile = (props) => {
    const {name} = props.product;

    return (
        <div>
            <h4>Selected Product : {name}</h4>
        </div>
    );
};

export default CetagoryDetile;