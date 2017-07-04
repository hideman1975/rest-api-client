/**
 * Created by andrey.manaenko on 28.06.2017.
 */
import React from 'react';
import store from '../store';
import {selectDirector} from '../actions/directorActions';
import {setActiveDirector} from '../actions/directorActions';
import {getAllDisksFromBase} from '../actions/diskActions';
import {getDisksByDirector} from '../ajaxCommander';

export default class Director extends React.Component{

    constructor(props) {
        super();
    }

    componentDidMount()
    {
        //console.log("client Замаунтился, Ура!",this);

    }

// При выборе клиента в списке меняем в Сторе форму редактирования
    clickMeTender(){
        console.log("Ткнули в директора-", this.props.index);
        store.dispatch(setActiveDirector(this.props.director));
        store.dispatch(selectDirector(this.props.index));

        var filteredDisks = getDisksByDirector(this.props.director.id);
        setTimeout(function (){console.log("filteredDisks",filteredDisks.length)}, 100);
        store.dispatch(getAllDisksFromBase(filteredDisks));

        //var i = store.getState()["selectedDirector"]; //делаем сдвиг индекса
        //store.dispatch(setActiveDirector(store.getState()["AllDirectors"][i]));
    }



    render(){
        var ClassName;
        if(this.props.director.id == store.getState()["activeDirector"].id){
           ClassName = "selected";
        } else  ClassName = "tab";

        return(

            <tr className={ClassName} onClick={this.clickMeTender.bind(this)}>

                <td>{this.props.director.id}</td>
                <td>{this.props.director.fio}</td>
                                
            </tr>

        );
    }
}