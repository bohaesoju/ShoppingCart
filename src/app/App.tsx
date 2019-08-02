import * as React from 'react';
import '../styles/style.scss';
import { Route, Switch } from 'react-router-dom';
import { NotFound } from '../components';
import { ListPage, CartPage } from '../pages/';
import Header from '../containers/Header';

class App extends React.Component {
    render(){
        return (
            <div className="wrap">
                <Header />
                <Switch>
                    <Route exact path='/' component={ ListPage } />
                    <Route exact path='/cart' component={ CartPage } />
                    <Route component={ NotFound } />
                </Switch>
            </div>

        );
    }
};

export default App;
