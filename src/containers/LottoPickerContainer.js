import React, { Component } from 'react';

import { database } from '../firebase/init';

import LottoPicker from '../components/LottoPicker';
import LottoList from '../components/LottoList';

class LottoPickerContainer extends Component {
    constructor(props){
        super(props);

        this.state = {
            number: [0,0,0,0,0],
            bonus: 0,
            lotto: null
        }

        this.getLottoList = this.getLottoList.bind(this);
        this.getArray = this.getArray.bind(this);
    }

    getLottoList = () => {
        database.ref('lotto').on('value', snapshot => {
            this.setState({
                lotto: snapshot.val()
            });
        });
    }

    getArray = () => {
        for(let i=0; i<this.state.lotto.length; i++){
            console.log(this.state.lotto[i].round1);
        }
    }

    componentDidMount(){
        this.getLottoList();
    }

    render(){
        return(
            <div id='App'>
                <LottoPicker onGetArray={this.getArray} />
                <LottoList list={this.state.lotto}/>
            </div>
        );
    }
}

export default LottoPickerContainer;