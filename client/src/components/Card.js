import { useState } from 'react';
import Product from '../model/Product';


const Card = ( { productData } ) => {
    const [product, setProduct] = useState(new Product(productData));

    return (
        <div>
            <img src={product.imageURL} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
        </div>
    )

}

export default Card;