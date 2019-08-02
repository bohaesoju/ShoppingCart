import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { tagRequest, selectTags } from '../../reducers/Tags';
import { rootState } from "../../reducers";

interface IProps {
    onTagRequest: typeof tagRequest
    onSelectTags: typeof selectTags
    Tag: any
}

class Tag extends React.Component<IProps> {
    constructor(props: IProps){
        super(props);
        this.props.onTagRequest();
    }

    onSelectTags = (i: number) => {
        this.props.onSelectTags(i);
    };

    render(){
        const { tagData, isFetchTag, selectedTagList } = this.props.Tag;
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
            <div>
                태그
            </div>
        )
    }
};

const mapStateToProps = (rootState: rootState) => {
    return {
        Tag: rootState.Tag,
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onTagRequest: () => dispatch(tagRequest()),
    onSelectTags: (i: number) => dispatch(selectTags(i))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Tag)
