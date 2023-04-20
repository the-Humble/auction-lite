import { useState } from 'react'

import Card from '../components/Card'
import Product from '../model/Product';

const Catalogo = ( socket ) => {

    const product = new Product();

    return (
        <div>
            <Card productData={ product }/>
        </div>
    )
}

export default Catalogo;