import * as React from 'react';
import List from '../containers/List';
import { Header } from '../components'

export const ListPage:React.FC = () => {
    return(
        <div className="wrap">
            <Header />
            <List />
        </div>
    )
};
