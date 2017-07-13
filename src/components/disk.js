/**
 * Created by andrey.manaenko on 15.06.2017.
 */
import React from 'react';
import store from '../store';

import {setActiveDisk} from '../actions/diskActions';
import {addDiskToOrder} from '../actions/orderActions';
import {AddToOrder, RemoveFromDiskList, RemoveFromOrder, RemoveFromClient} from './diskListButtons';

export default class Disk extends React.Component{

    constructor(props) {
        super();
    }


// При выборе клиента в списке меняем в Сторе форму редактирования
    clickMeTender(){

    store.dispatch(setActiveDisk(this.props.disk));

    }

    makeRented(){
        console.log("Выдать диск", this.props.disk.title);
        var activeClientId = store.getState()["activeClient"].id;
        store.dispatch(addDiskToOrder(this.props.disk, activeClientId));
    }


    render(){
        var ClassName, Mybutton;
        if (this.props.place === "orderEdit") Mybutton = <RemoveFromOrder disk = {this.props.disk}/>;
        if (this.props.place === "diskPage") Mybutton = <RemoveFromDiskList disk = {this.props.disk}/>;
        if (this.props.place === "orderPage") Mybutton = <AddToOrder disk = {this.props.disk}/>;
        if (this.props.place === "clientEdit") Mybutton = <RemoveFromClient disk = {this.props.disk}/>;

        if(this.props.disk.id == store.getState()["activeDisk"].id){
                ClassName = "selected";
        } else if(this.props.disk.client == 0){
            ClassName = "diskFree";
        } else  ClassName = "tab";

        return(

            <tr className={ClassName} onClick={this.clickMeTender.bind(this)}>

                <td>{this.props.disk.id}</td>
                <td>{this.props.disk.genre}</td>
                <td>{this.props.disk.title}</td>
                <td>{this.props.disk.year}</td>
                <td>{Mybutton}</td>
                
            </tr>

        );
    }
}