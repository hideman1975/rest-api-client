/**
 * Created by andrey.manaenko on 06.07.2017.
 */
import React from 'react';
import store from '../store';
import DisksList from './disksList';
import ClientList from './clientList';



export default class OrderPage extends React.Component{

    constructor(props) {
        super();
    }

    render(){
        var ClassName;
        if("Заказы" == store.getState()["activePage"]){
            ClassName = "activePage";
        } else  ClassName = "passivePage";

        return(

            <div className={ClassName}>
                <ClientList
                    allClients={this.props.allClients}
                    activeClient = {this.props.activeClient}
                    allDisks={this.props.allDisks}
                    activeDisk = {this.props.activeDisk}
                />

                <DisksList AllDisks={this.props.filteredDisks}
                           activeDisk = {this.props.activeDisk}
                           activeClient = {this.props.activeClient}
                />

            </div>

        );
    }
}