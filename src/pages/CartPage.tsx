import * as React from 'react';
import Cart from '../containers/Cart';
import { Header, EmptyCart } from '../components';

export const CartPage:React.FC = () => {
    return(
        <div className="wrap">
            <Header/>
            <Cart />
        </div>
    )
};
