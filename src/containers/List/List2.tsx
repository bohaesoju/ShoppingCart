import * as React from 'react';
import { StationeryBox, TagList } from '../../components/';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { stationeryRequest, addToCart } from '../../reducers/Stationeries';
import { tagRequest, selectTags } from '../../reducers/Tags';
import { deleteToCart } from '../../reducers/Cart';
import { rootState } from "../../reducers";

interface IProps {
    onStationeryRequest: typeof stationeryRequest
    onTagRequest: typeof tagRequest
    onAddToCart: typeof addToCart
    onDeleteToCart: typeof deleteToCart
    onSelectTags: typeof selectTags
    Stationery: any
    Tag: any
    Cart: {
        count: number
    }
    contentPerPage: number
}

class List extends React.Component<IProps> {
    constructor(props: IProps){
        super(props);
        this.props.onStationeryRequest();
        this.props.onTagRequest();
    }

    state = {
        currentContent: [],
        renderingInitNumber: 1,
        contentPerPage: 5

    };

    onAddToCart = (i: number, e: any) => {
        console.log('xxx', i, e);
        this.props.onAddToCart(i, e);
    };

    onDeleteToCart = () => {
        this.props.onDeleteToCart();
    };

    onSelectTags = (i: number) => {
        this.props.onSelectTags(i);
    };

    viewMoreButton = () => {
        this.setState({
            renderingInitNumber: this.state.renderingInitNumber + 1
        });
    };

    static getDerivedStateFromProps(nextProps: any){
        if( nextProps.Stationery.isFetchStationery === true ){
            return {
                // currentContent: nextProps.Stationery.data.slice(0, this.contentPerPage)
            }
        }
        return null;
    }

    render(){
        const { data, isFetchStationery } = this.props.Stationery;
        const { tagData, isFetchTag, selectedTagList } = this.props.Tag;
        const { count } = this.props.Cart;
        const { currentContent } = this.state;
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
            <div className="listPageWrap">
                <div className="contentWrap">
                    {/*<ul className="productUl">*/}
                    {/*{ isFetchTag === true && tagData.map((e: ITag, i:number) => (*/}
                    {/*<TagList*/}
                    {/*key={i}*/}
                    {/*TagData={e}*/}
                    {/*onSelectTags = { () => this.onSelectTags(i) }*/}
                    {/*/>)*/}
                    {/*)}*/}
                    {/*</ul>*/}
                    <ul className="cardBoxUl">
                        { currentContent.length > 0 && currentContent.map((e: IStationery, i:number) => (
                            <StationeryBox
                                key={i}
                                count={count}
                                StationeryData={e}
                                onAddToCart={ () => this.onAddToCart(i, e) }
                                onDeleteToCart={ this.onDeleteToCart } />
                        ))}
                    </ul>
                    <button onClick={ this.viewMoreButton } className="moreButton">더보기</button>
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
    onAddToCart: (i: number, e: any) => dispatch(addToCart(i, e)),
    onDeleteToCart: () => dispatch(deleteToCart()),
    onSelectTags: (i: number) => dispatch(selectTags(i))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List);
