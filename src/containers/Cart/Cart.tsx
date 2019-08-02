import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { rootState } from '../../reducers';
import { EmptyCart, FieldCart } from '../../components';
import { clearCartlist } from '../../reducers/Stationeries';
import { purchaseRequest } from '../../reducers/Cart';

interface IProps{
    Stationery: any
    onClearCartlist(): void
    onPurchaseRequest(): void
}

class Cart extends React.Component<IProps> {
    buyButton = () => {
        console.log(this.props.Stationery.cartList);
        this.props.onPurchaseRequest();
        this.props.onClearCartlist();
    };
    cancelButton = () => {
        console.log('cancel')
    };
    render(){
        const { cartList } = this.props.Stationery;
        return(
            <div className="cartPageWrap">
                <div className="contentWrap">
                    <div className="cartWrap">
                        { cartList.length > 0 ?
                            <FieldCart cancelButton={ this.cancelButton } buyButton={ this.buyButton } cartList={ cartList } /> :
                            <EmptyCart />
                        }
                    </div>
                </div>
            </div>
        )
    }
};

const mapStateToProps = (rootState: rootState) => {
    return {
        Stationery: rootState.Stationery
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onClearCartlist: () => dispatch(clearCartlist()),
    onPurchaseRequest: () => dispatch(purchaseRequest())

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);
