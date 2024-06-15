import React from 'react'

// components
import ProductCard from 'components/ODD/ProductCard'

const Products = () => {
    return (
        <div className='mt-12 grid grid-cols-3 gap-8'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    )
}

export default Products