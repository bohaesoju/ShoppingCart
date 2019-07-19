import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { rootState } from "../../reducers";
import { EmptyCart } from '../../components';


class Cart extends React.Component {

    render(){

        return(
            <div className="wrap">
                <div className="contentWrap">
                    <div className="cartWrap">
                        <EmptyCart />
                    </div>
                </div>
            </div>
        )
    }
};

const mapStateToProps = (rootState: rootState) => {
    return {
        // Stationery: rootState.Stationery,
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    // onStationeryRequest: () => dispatch(stationeryRequest()),

});

export default connect(
    null,
    null
)(Cart);
