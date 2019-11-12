import React from 'react';
import { Switch, Route} from 'react-router-dom';
import { LottoPicker, LottoList, LottoNumber } from './index';

const Router = () => {
     return (
        <Switch>
            <Route exact path="/" component={LottoPicker}/>
            <Route path="/list" component={LottoList}/>
            <Route path="/number" component={LottoNumber}/>
        </Switch>
    );
}

export default Router;