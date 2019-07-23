import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { rootState } from "../../reducers";
import { EmptyCart, FieldCart } from '../../components';

interface IProps{
    Stationery: any
}

class Cart extends React.Component<IProps> {
    buyButton = () => {
        console.log('buy')
    };
    render(){
        const { cartList } = this.props.Stationery;
        return(
            <div className="wrap">
                <div className="contentWrap">
                    <div className="cartWrap">
                        { cartList.length > 0 ?
                            <FieldCart buyButton={ this.buyButton } cartList={ cartList } /> :
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
    // onStationeryRequest: () => dispatch(stationeryRequest()),

});

export default connect(
    mapStateToProps,
    null
)(Cart);
