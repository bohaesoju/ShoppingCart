import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { rootState } from "../../reducers";
import { EmptyCart, FieldCart } from '../../components';

interface IProps{
    Cart: {
        count: number
    }
}

class Cart extends React.Component<IProps> {
    buyButton = () => {
        console.log('buy')
    };
    render(){
        const { count } = this.props.Cart;
        return(
            <div className="wrap">
                <div className="contentWrap">
                    <div className="cartWrap">
                        { count > 0 ?
                            <FieldCart buyButton={ this.buyButton } count={ count } /> :
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
        Cart: rootState.Cart
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    // onStationeryRequest: () => dispatch(stationeryRequest()),

});

export default connect(
    mapStateToProps,
    null
)(Cart);
