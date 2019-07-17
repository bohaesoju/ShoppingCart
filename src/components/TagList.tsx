import * as React from 'react';

interface ITagData {
    key: string,
    name: string,
}

interface IAddInfo {
    TagData: ITagData
}

export const TagList = ({ TagData }: IAddInfo) => {
    return(
        <li className="productLi">{TagData.name}</li>
    )
};
