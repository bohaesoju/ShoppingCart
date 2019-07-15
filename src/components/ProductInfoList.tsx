import * as React from 'react';
import ProductInfo from './ProductInfo';

interface ProductProps {
    data: any;
}

class ProductInfoList extends React.Component<ProductProps> {
    static defaultProps = {
        data: []
    };
    render(){
        const { data } = this.props;
        const list = data.map((info: any, i:number) => (
            <ProductInfo key={i} info={info} />)
        );
        return(
            <div>
                { list }
            </div>
        )
    }
}

export default ProductInfoList;
