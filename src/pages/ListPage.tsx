import * as React from 'react';
import List from '../containers/List';
import Tag from '../containers/Tag';

export const ListPage:React.FC = () => {
    return(
        <>
            <Tag />
            <List />
        </>
    )
};
