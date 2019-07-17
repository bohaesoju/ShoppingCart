import * as React from 'react';
import '../styles/style.scss';
import { Route, Switch } from 'react-router-dom';
import { Home, Menu, NotFound } from '../components';
import { ListPage, CartPage } from '../pages/';

class App extends React.Component {
    render(){
        return (
            <React.Fragment>
                {/*<Menu />*/}
                <Switch>
                    <Route exact path='/' component={ ListPage } />
                    <Route exact path='/cart' component={ CartPage } />
                    <Route component={ NotFound } />
                </Switch>
            </React.Fragment>
        );
    }
};

export default App;
