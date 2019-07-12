import * as React from 'react';
import { ProductInfo } from './ProductInfo';

interface ProductProps {
    productData: any;
}

class ProductInfoList extends React.Component<ProductProps> {
    static defaultProps = {
        productData: []
    };
    render(){
        const { productData } = this.props;
        const list = productData.map(({name, price}, i) => (
            <ProductInfo name={name} price={price} key={i} />)
        );
        return(
            <div>
                { list }
            </div>
        )
    }
}

export default ProductInfoList;
