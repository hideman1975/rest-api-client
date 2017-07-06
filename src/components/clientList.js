/**
 * Created by andrey.manaenko on 30.06.2017.
 */
import React from 'react';
import Client from './client';
import ClientEdit from './clientEdit';


export default class ClientList extends React.Component{

    componentDidMount()
    {
        console.log("ClientList Замаунтился, Ура!",this);

    }

    renderList()
    {
        var allClients = [];
        var Index = 0;
        allClients = this.props.allClients;

        return   <table className="table">
            <caption>Клиенты</caption>
            <tbody>
            <tr>
                <th>ID</th><th>Имя</th><th>Баланс</th><th>Телефон</th>
            </tr>

            {allClients.map((msg) =>
                <Client key = {msg.id} client={msg} index={Index++}/>)}
            </tbody>
        </table>

    }
    render(){

        return(

            <div className="clientField">
                {this.renderList()}
                
            </div>

        );
    }
}