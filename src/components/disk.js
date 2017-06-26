/**
 * Created by andrey.manaenko on 15.06.2017.
 */
import React from 'react';
import store from '../store';
import {selectDisk} from '../actions/clientsActions';
import {setActiveDisk} from '../actions/clientsActions';


export default class Disk extends React.Component{

    constructor(props) {
        super();
    }

    componentDidMount()
    {
        //console.log("client Замаунтился, Ура!",this);
        
    }
    
// При выборе клиента в списке меняем в Сторе форму редактирования
    clickMeTender(){
    console.log("Ткнули в диск-", this.props.index);
    store.dispatch(setActiveDisk(this.props.disk));
    store.dispatch(selectDisk(this.props.index));
        //var i = store.getState()["selectedDisk"]; //делаем сдвиг индекса
        //store.dispatch(setActiveDisk(store.getState()["AllDisks"][i]));
    }



    render(){
        var ClassName;
        if(this.props.disk.id == store.getState()["activeDisk"].id){
                ClassName = "selected";
        } else  ClassName = "tab";

        return(

            <tr className={ClassName} onClick={this.clickMeTender.bind(this)}>

                <td>{this.props.disk.id}</td>
                <td>{this.props.disk.genre}</td>
                <td>{this.props.disk.title}</td>
                <td>{this.props.disk.year}</td>

            </tr>

        );
    }
}