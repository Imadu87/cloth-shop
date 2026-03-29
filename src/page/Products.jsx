import React from 'react'
import FilteredProductsPage from "../components/products/ProductsFiltering"
import ProductsFilterMobile from '../components/products/ProductsFilterMobile'

const Products = () => {
  return (
    <div>
        <FilteredProductsPage />
        <ProductsFilterMobile />
    </div>
  )
}

export default Products