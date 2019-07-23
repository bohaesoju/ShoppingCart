import * as React from 'react';
import '../styles/style.scss';
import { Route, Switch } from 'react-router-dom';
import { NotFound } from '../components';
import Cart from '../containers/Cart';
import List from '../containers/List';
import Header from '../containers/Header';

class App extends React.Component {
    render(){
        return (
            <div className="wrap">
                <Header />
                <Switch>
                    <Route exact path='/' component={ List } />
                    <Route exact path='/cart' component={ Cart } />
                    <Route component={ NotFound } />
                </Switch>
            </div>

        );
    }
};

export default App;
