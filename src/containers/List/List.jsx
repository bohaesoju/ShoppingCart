import * as React from 'react';
import { StationeryBox, TagList } from '../../components/';
// import { StationeryBox } from '../../components/';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { stationeryRequest, addToCart } from '../../reducers/Stationeries';
import { tagRequest, selectTags } from '../../reducers/Tags';
import { deleteToCart } from '../../reducers/Cart';
import { rootState } from "../../reducers";

// interface IProps {
//     onStationeryRequest: typeof stationeryRequest
//     onTagRequest: typeof tagRequest
//     onAddToCart: typeof addToCart
//     onDeleteToCart: typeof deleteToCart
//     onSelectTags: typeof selectTags
//     Stationery: any
//     Tag: any
//     Cart: {
//         count: number
//     }
//     contentPerPage: number
// }

class List extends React.Component {
    constructor(props){
        super(props);
        this.props.onStationeryRequest();
        this.props.onTagRequest();
        // this.contentPerPage = 5;
    }

    state = {
        currentContent: [],
        renderingInitNumber: 1,
        contentPerPage: 5,
        currentPage: 1,

    };

    onAddToCart = (i, e) => {
        console.log('addToCart', i, e);
        this.props.onAddToCart(i, e);
    };

    onDeleteToCart = () => {
        this.props.onDeleteToCart();
    };

    onSelectTags = (i) => {
        this.props.onSelectTags(i);
    };

    viewMoreButton = () => {
        this.setState({
            currentPage: this.state.currentPage + 1
        });
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.Stationery !== prevProps.Stationery ||
            this.state.currentPage !== prevState.currentPage
        ){
            this.setState({
                currentContent: prevProps.Stationery.data.slice(0, (this.state.contentPerPage * this.state.currentPage))
            });
        }
    }

    render(){
        const { data, isFetchStationery } = this.props.Stationery;
        const { tagData, isFetchTag, selectedTagList } = this.props.Tag;
        const { count } = this.props.Cart;
        const { currentContent } = this.state;
        // interface IStationery {
        //     id: number
        //     image: string
        //     name: string
        //     price: number
        //     tags: {
        //         key: string
        //         name: string
        //     }[]
        //     stock: number
        //     count: number
        // }
        // interface ITag {
        //     key: string,
        //     name: string,
        // }
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
                        { currentContent.length > 0 && currentContent.map((e, i) => (
                            <StationeryBox
                                key={i}
                                count={count}
                                StationeryData={e}
                                onAddToCart={ ( i,e ) => this.onAddToCart(i, e) }
                                onDeleteToCart={ this.onDeleteToCart } />
                        ))}
                    </ul>
                    <button onClick={ this.viewMoreButton } className="moreButton">더보기</button>
                </div>
            </div>
        )
    }
};

const mapStateToProps = (rootState) => {
    return {
        Stationery: rootState.Stationery,
        Tag: rootState.Tag,
        Cart: rootState.Cart
    }
};

const mapDispatchToProps = (dispatch) => ({
    onStationeryRequest: () => dispatch(stationeryRequest()),
    onTagRequest: () => dispatch(tagRequest()),
    onAddToCart: (i, e) => dispatch(addToCart(i, e)),
    onDeleteToCart: () => dispatch(deleteToCart()),
    onSelectTags: (i) => dispatch(selectTags(i))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List);
