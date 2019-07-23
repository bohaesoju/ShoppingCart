import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { rootState } from "../../reducers";
import {Link} from "react-router-dom";

interface IProps{
    Cart: {
        count: number
    }
}

class Header extends React.Component<IProps> {
    render(){
        const { count } = this.props.Cart;
        return(
            <header className="header">
                <p className="title1">문구담기</p>
                <ul className="rightIcon">
                    <li className="liIcon"><Link to="/">목록</Link></li>
                    <li className="liIcon"><Link to="/cart">카트</Link></li>
                    { count > 0 && <li className="liIcon">{ count }</li>}
                </ul>
            </header>
        )
    }
};

const mapStateToProps = (rootState: rootState) => {
    return {
        Cart: rootState.Cart,
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    // onStationeryRequest: () => dispatch(stationeryRequest()),

});

export default connect(
    mapStateToProps,
    null
)(Header);
