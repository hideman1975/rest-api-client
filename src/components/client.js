/**
 * Created by andrey.manaenko on 30.06.2017.
 */
import React from 'react';
import store from '../store';
import {selectClient} from '../actions/clientActions';
import {setActiveClient} from '../actions/clientActions';
import {getAllDisksFromBase} from '../actions/diskActions';
import {getDisksByClient} from '../ajaxCommander';

export default class Client extends React.Component{

    constructor(props) {
        super();
    }

    componentDidMount()
    {
        //console.log("client Замаунтился, Ура!",this);

    }

// При выборе клиента в списке меняем в Сторе форму редактирования
    clickMeTender(){
        //console.log("Ткнули в клиента-", this.props.index);
        store.dispatch(setActiveClient(this.props.client));
        //store.dispatch(selectDirector(this.props.index));

        var filteredDisks = getDisksByClient(this.props.client.id);
        //setTimeout(function (){console.log("filteredDisks",filteredDisks.length)}, 100);
        store.dispatch(getAllDisksFromBase(filteredDisks));

        //var i = store.getState()["selectedDirector"]; //делаем сдвиг индекса
        //store.dispatch(setActiveDirector(store.getState()["AllDirectors"][i]));
    }



    render(){
        var ClassName;
        if(this.props.client.id == store.getState()["activeClient"].id){
            ClassName = "selected";
        } else  ClassName = "tab";

        return(

            <tr className={ClassName} onClick={this.clickMeTender.bind(this)}>

                <td>{this.props.client.id}</td>
                <td>{this.props.client.fio}</td>
                <td>{this.props.client.balance}</td>
                <td>{this.props.client.phone}</td>
            </tr>

        );
    }
}