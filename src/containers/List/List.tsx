import * as React from 'react';
import { StationeryBox, TagList } from '../../components/';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { stationeryRequest } from '../../reducers/Stationeries';
import { tagRequest } from '../../reducers/Tags';
import { rootState } from "../../reducers";

interface IProps {
    onStationeryRequest: typeof stationeryRequest
    onTagRequest: typeof tagRequest
    Stationery: any
    Tag: any
}

class List extends React.Component<IProps> {
    constructor(props: IProps){
        super(props);
        this.props.onStationeryRequest();
        this.props.onTagRequest();
    }

    render(){
        const { data, isFetchStationery } = this.props.Stationery;
        const { tagData, isFetchTag } = this.props.Tag;
        interface IStationery {
            id: number,
            image: string,
            name: string,
            price: number,
            stock: number
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
        Tag: rootState.Tag,
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onStationeryRequest: () => dispatch(stationeryRequest()),
    onTagRequest: () => dispatch(tagRequest()),

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List);