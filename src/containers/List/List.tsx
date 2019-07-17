import * as React from 'react';
import { StationeryBox } from '../../components/';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { stationeryRequest } from '../../reducers/Stationery';
import { rootState } from "../../reducers";

interface IProps {
    onStationeryRequest: typeof stationeryRequest
    Stationery: any
}

class List extends React.Component<IProps> {
    constructor(props: IProps){
        super(props);
        this.props.onStationeryRequest();
    }

    render(){
        const { data, isStationery } = this.props.Stationery;
        interface IStationery {
            id: number,
            image: string,
            name: string,
            price: number,
            stock: number
        }
        return(
            <div className="wrap">
                <div className="contentWrap">
                    <ul className="productUl">
                        <li className="productLi">볼펜</li>
                        <li className="productLi">연필</li>
                        <li className="productLi">침대</li>
                        <li className="productLi">잠옷</li>
                        <li className="productLi">부채</li>
                    </ul>
                    <ul className="cardBoxUl">
                        <div>
                            { isStationery === true && data.map((e: IStationery, i:number) => (
                                <StationeryBox key={i} StationeryData={e} />)
                            )}
                        </div>
                    </ul>
                </div>
            </div>

        )
    }
};

const mapStateToProps = (rootState: rootState) => {
    return {
        Stationery: rootState.Stationery,
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onStationeryRequest: () => dispatch(stationeryRequest()),

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List);
