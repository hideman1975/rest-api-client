/**
 * Created by andrey.manaenko on 20.03.2017.
 */
import React from 'react';
import Client from './client';
import ClientEdit from './clientEdit';



export default class ClientsList extends React.Component{

    renderList()
    {
        var cutingMsg = [];
        cutingMsg = this.props.clients;

        return<div>
            <table className="table dayShedule">
                <tbody>
                <tr>
                    <th>&nbsp;</th><th>Фамилия Имя Отчество</th><th>серия</th><th>номер</th>
                </tr>

                {cutingMsg.map((msg) =>
                    <Client editClient={this.props.editClient} key = {msg.id} client={msg}/>)}
                </tbody>
            </table></div>

    }
    render(){

        return(

                <div>
                    {this.renderList()}

                    <ClientEdit editClient={this.props.editClient}
                                oper_type={this.props.oper_type}
                                formFio={this.props.formFio}
                                pasp_num={this.props.pasp_num}
                                pasp_ser={this.props.pasp_ser}
                                birth_date={this.props.birth_date}
                                newClient={this.props.newClient}
                    />
                    <br/><br/>
                    
                </div>

        );
    }
}