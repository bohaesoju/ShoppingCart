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
        const list = productData.map(
            info => (<ProductInfo productData={info}/>)
        );
        return(
            <div>
                {list}
            </div>
        )
    }
}

export default ProductInfoList;
