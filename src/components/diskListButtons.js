import React from 'react';
import {removeDiskFromOrder, addDiskToOrder} from '../actions/orderActions';
import store from '../store';
import {saveDisk} from '../ajaxCommander';

export class AddToOrder extends React.Component{
    clickMe(){
        console.log("нажата AddToOrder");
        var activeClientId = store.getState()["activeClient"].id;
        store.dispatch(addDiskToOrder(this.props.disk, activeClientId));
         }
    render(){
        return(
            <div>
                <button onClick={this.clickMe.bind(this)}>Выдать</button>
            </div>
        );
    }
}

export class RemoveFromOrder extends React.Component{
    clickMe(){
        console.log("нажата RemoveFromOrder");
        var activeClientId = store.getState()["activeClient"].id;
        store.dispatch(removeDiskFromOrder(this.props.disk, activeClientId));
    }
    render(){
        return(
            <div>
                <button onClick={this.clickMe.bind(this)}>Исключить</button>
            </div>
        );
    }
}

export class RemoveFromClient extends React.Component{
    clickMe(){
        console.log("нажата RemoveFromClient");
        saveDisk(
            //this.props.activeClient.id,
            this.props.disk.id,
            this.props.disk.title,
            this.props.disk.genre,
            this.props.disk.year,
            0);
    }
        //store.dispatch(removeDiskFromOrder(this.props.disk, activeClientId));
    
    render(){
        return(
            <div>
                <button onClick={this.clickMe.bind(this)}>Возврат</button>
            </div>
        );
    }
}
export class RemoveFromDiskList extends React.Component{

    clickMe(){
        console.log("нажата RemoveFromDiskList");
        //deleteClient(this.props.activeClient.id);
        //store.dispatch(clearClient(0));
        //store.dispatch(selectClient(null));

    }
    render(){

        return(

            <div>
                <button onClick={this.clickMe.bind(this)}>Удалить</button>

            </div>

        );
    }
}



