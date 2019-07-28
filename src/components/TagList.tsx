import * as React from 'react';

interface ITagData {
    key: string,
    name: string,
}

interface IAddInfo {
    TagData: ITagData
}

export const TagList = ({ TagData }: IAddInfo) => {
    const getTagName = (tagData: any) => {
        console.log(tagData)
    }
    return(
        <li className="productLi" onClick={() => getTagName(TagData)}>{TagData.name}</li>
    )
};
