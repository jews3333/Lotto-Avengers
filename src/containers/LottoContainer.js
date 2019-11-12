import React, { Component } from 'react';

import { database } from '../firebase/init';

import Router from '../routes/Router';

import Store from '../store/Store';

class LottoContainer extends Component {
    constructor(props){
        super(props);

        this.state = {
            number: [0,0,0,0,0],
            bonus: 0,
            lotto: null,
            number: null,
            percent: null
            
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
                list.push(this.state.lotto[i].bonus);
            }

            const result = new Array();

            for(let i in list){
                if(!(list[i] in result)){
                    result[list[i]] = {
                        number : list[i],
                        numbers :[]
                    };
                }
                result[list[i]].numbers.push(list[i]);
            }

            for(let i=1; i <result.length; i++){
                result[i].numbers = result[i].numbers.length
            }

            //numbers값으로 내림차순 정렬
            result.sort((a, b) => {
                return a.numbers < b.numbers ? 1 : a.numbers > b.numbers ? -1 : 0;
            });

            const percent = {
                all: 0
            };

            for(let i=1; i<result.length; i++){
                percent.all = percent.all += result[i].numbers
            }

            this.setState({
                ...this.state,
                number: result
            });
            
            console.log(percent)

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
                <Store.Provider value={this.state}>
                    <Router />
                </Store.Provider>
                {/* <LottoPicker/>
                <LottoNumber number={this.state.number} />
                <LottoList list={this.state.lotto}/> */}
            </div>
        );
    }
}

export default LottoContainer;