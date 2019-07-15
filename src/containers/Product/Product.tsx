import * as React from 'react';
import { ProductInfo } from '../../components/';
import { rootState } from "../../reducers";
import { bindActionCreators, Dispatch } from "redux";
import { addToCart } from "../../reducers/Info";
import { connect } from "react-redux";

interface ProductInterface {
    onAddToCart: any
}

class Product extends React.Component<ProductInterface> {
    state = {
        information: [
            {
                id: 1,
                name: '볼펜쓰',
                price: 2000,
                stock: 10
            },
            {
                id: 2,
                name: '지우개',
                price: 500,
                stock: 3,
            }
        ]
    };
    render(){
        const { onAddToCart } = this.props;
        const list = this.state.information.map((info: any, i:number) => (
            <ProductInfo key={i} info={info} onAddToCart={ onAddToCart } />)
        );
        return(
            <div>
                { list }
            </div>
        )
    }
};

const mapStateToProps = (rootState: rootState) => {
    return {
        Info: rootState.Info
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onAddToCart: bindActionCreators(addToCart, dispatch),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Product);
