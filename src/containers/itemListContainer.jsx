import React, { useEffect, useState } from 'react';
import './itemListContainer.scss';
import ProductsList from '../../mocks/productsList/productsList.jsx';
import ItemList from '../../components/itemList/itemList.jsx';

const ItemListContainer = (props) => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const onAdd = (stock, contador) => {
        return () => {
            if(contador <= stock) {};
        };
    };

    useEffect(() => {

        setIsLoading(true);

        const PromesaItems = new Promise((resolve, reject) => {
            setTimeout(() => resolve(ProductsList), 2000);
        });

        PromesaItems.then((result) => {
            setProducts(result);
            setIsLoading(false);
        });
    }, []);

    if(isLoading) {
        return (
            <div className="d-flex justify-content-center">
                <img src="/images/loading.gif" className="loading" alt="Loading"/>
            </div>
        );
    };

    return (
        <>
            <ItemList products={products}/>
        </>
    );
};
export default ItemListContainer;