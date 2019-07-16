import * as React from 'react';
import { ProductInfo } from '../../components/';
import { useDispatch } from "react-redux";
import { useEffect, useState, useCallback } from "react";

export const Product:React.FC = () => {
    const initialValue = [
        { id: 1,
            name: '이니셜',
            price: 0,
            stock: 0
        }];
    const allowedState = [
        {
            id: 1,
            name: '모나미볼펜',
            price: 2000,
            stock: 10,
            count: 0
        },
        {
            id: 2,
            name: '지우개',
            price: 600,
            stock: 3,
            count:0
        },
        {
            id: 3,
            name: '딱풀',
            price: 500,
            stock: 13,
            count:0
        }
    ];
    const [stateOptions, setStateValues] = useState(initialValue);

    useEffect(() => {
        setStateValues(allowedState);
    }, []);
    const dispatch = useDispatch();
    const onAddToCart = useCallback(
        () => dispatch({ type: "ADD_TO_CART" }),
        [dispatch]
    );

    const list = stateOptions.map((info: any, i:number) => (
        <ProductInfo key={i} info={info} onAddToCart={onAddToCart} />)
    );
    return(
        <div>
            { list }
        </div>
    )
};
