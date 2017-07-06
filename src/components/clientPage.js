/**
 * Created by andrey.manaenko on 04.07.2017.
 */
import React from 'react';
import store from '../store';
import ClientList from './clientList';
import ClientEdit from './clientEdit';



export default class ClientPage extends React.Component{

    constructor(props) {
        super();
    }

   

    render(){
        var ClassName;
        if("Клиенты" == store.getState()["activePage"]){
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
                <ClientEdit activeClient={this.props.activeClient}
                            allDisks={this.props.allDisks}
                            activeDisk = {this.props.activeDisk}
                />

            </div>

        );
    }
}