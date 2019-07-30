import * as React from 'react';

interface ITagData {
    key: string,
    name: string,
}

interface IAddInfo {
    TagData: ITagData
    onSelectTags(i: number): void
}

export const TagList = ({ TagData, onSelectTags }: IAddInfo) => {
    // const getTagName = (tagData: ITagData) => {
    //     console.log(tagData.name)
    // };
    return(
        <li className="productLi" onClick={ (i: any) => onSelectTags(i) }>{ TagData.name }</li>
    )
};
