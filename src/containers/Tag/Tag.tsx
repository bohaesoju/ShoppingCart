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
        interface ITag {
            key: string,
            name: string,
        }
        return(
                <ul className="productUl">
                    { isFetchTag === true && tagData.map((e: ITag, i:number) => (
                        <li className="productLi" key={i} onClick={ (i: any) => this.onSelectTags(i) }>{ e.name }</li>
                    ))}
                </ul>
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
