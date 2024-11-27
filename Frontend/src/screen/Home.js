import React from 'react'
import { Header } from '../component/Header'
import { Navigation } from '../component/Navigation'
import { ProductList } from '../component/ProductList'

export const Home = () => {
    return (
        <>
            <Header />
            <Navigation />
            <ProductList />
        </>

    )
}
