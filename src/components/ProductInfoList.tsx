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
        const list2 = 'ㅋㅋㅋ';
        return(
            <div>
                <ProductInfo info={data} />
                {console.log('data : ', data, 'list : ', list)}
            </div>
        )
    }
}

export default ProductInfoList;
