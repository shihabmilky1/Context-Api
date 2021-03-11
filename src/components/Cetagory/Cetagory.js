import React, { useContext , useState , useEffect} from 'react';
import { cetagoryContext } from '../../App';
import CetagoryDetile from '../CetagoryDetail/CetagoryDetile';

const products = [{id: 1,name: "Hp",category: "Laptop"},{id: 2,name: "Lenevo",category: "Laptop"},
{id: 3,name: "Samsung",category: "Mobile"}, {id: 4,name: "Apple",category: "Mobile"},
{id: 1,name: "Canon",category: "Camera"},{id: 6,name: "Nikon",category: "Camera"},
]
const Cetagory = () => {
    const [category] = useContext(cetagoryContext);
    const [product,SetProduct] = useState([]);
    useEffect(()=>{
        const matching = products.filter(pd => pd.category.toLowerCase() === category.toLowerCase());
        SetProduct(matching);
    },[category])
    return (
        <div style={{border: '1px solid black'}}>
            <h2>this is Cetagory {category}</h2>
            {
                product.map(pd => <CetagoryDetile product={pd}></CetagoryDetile>)
            }
        </div>
    );
};

export default Cetagory;