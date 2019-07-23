import * as React from 'react';
import { StationeryBox, TagList } from '../../components/';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { stationeryRequest } from '../../reducers/Stationeries';
import { tagRequest } from '../../reducers/Tags';
import { addToCart, deleteToCart } from '../../reducers/Cart';
import { rootState } from "../../reducers";

interface IProps {
    onStationeryRequest: typeof stationeryRequest
    onTagRequest: typeof tagRequest
    onAddToCart: typeof addToCart
    onDeleteToCart: typeof deleteToCart
    Stationery: any
    Tag: any
    Cart: {
        count: number
    }
}

class List extends React.Component<IProps> {
    constructor(props: IProps){
        super(props);
        this.props.onStationeryRequest();
        this.props.onTagRequest();
    }

    onAddToCart = () => {
        this.props.onAddToCart();
    };

    onDeleteToCart = () => {
        this.props.onDeleteToCart();
    };

    render(){
        const { data, isFetchStationery } = this.props.Stationery;
        const { tagData, isFetchTag } = this.props.Tag;
        const { count } = this.props.Cart;
        interface IStationery {
            id: number
            image: string
            name: string
            price: number
            tags: {
                key: string
                name: string
            }[]
            stock: number
            count: number
        }
        interface ITag {
            key: string,
            name: string,
        }
        return(
            <div className="wrap">
                <div className="contentWrap">
                    <ul className="productUl">
                        { isFetchTag === true && tagData.map((e: ITag, i:number) => (
                            <TagList key={i} TagData={e} />)
                        )}
                    </ul>
                    <ul className="cardBoxUl">
                        <div>
                            { isFetchStationery === true && data.map((e: IStationery, i:number) => (
                                <StationeryBox
                                    key={i}
                                    count={count}
                                    StationeryData={e}
                                    onAddToCart={ this.onAddToCart }
                                    onDeleteToCart={ this.onDeleteToCart } />)
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
        Tag: rootState.Tag,
        Cart: rootState.Cart
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onStationeryRequest: () => dispatch(stationeryRequest()),
    onTagRequest: () => dispatch(tagRequest()),
    onAddToCart: () => dispatch(addToCart()),
    onDeleteToCart: () => dispatch(deleteToCart()),

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List);
