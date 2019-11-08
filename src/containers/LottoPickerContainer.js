import React, { Component } from 'react';

import { database } from '../firebase/init';

import LottoPicker from '../components/LottoPicker';
import LottoList from '../components/LottoList';
import LottoNumber from '../components/LottoNumber';

class LottoPickerContainer extends Component {
    constructor(props){
        super(props);

        this.state = {
            number: [0,0,0,0,0],
            bonus: 0,
            lotto: null,
            number: null
            
        }

        this.getLottoList = this.getLottoList.bind(this);
        this.getArray = this.getArray.bind(this);
    }

    getLottoList = async () => {
        try {
            await database.ref('lotto').on('value', snapshot => {
                this.setState({
                    lotto: snapshot.val(),
                });

                this.getArray();
            });
        } catch(error) {
            console.warn(error);
        }
    }

    getArray = () => {
        try {
            const list = new Array();

            for(let i=0; i<this.state.lotto.length; i++){
                list.push(this.state.lotto[i].round1);
                list.push(this.state.lotto[i].round2);
                list.push(this.state.lotto[i].round3);
                list.push(this.state.lotto[i].round4);
                list.push(this.state.lotto[i].round5);
            }

            const result = new Array();

            for(let i in list){
                if(!(list[i] in result)){
                    result[list[i]] = [];
                }
                result[list[i]].push(list[i]);
            }

            this.setState({
                ...this.state,
                number: result
            });

        } catch(error) {
            console.log(error)
        }
        
    }

    componentDidMount(){
        this.getLottoList();
    }

    render(){
        return(
            <div id='App'>
                <LottoPicker/>
                <LottoNumber number={this.state.number}/>
                <LottoList list={this.state.lotto}/>
            </div>
        );
    }
}

export default LottoPickerContainer;