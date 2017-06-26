/**
 * Created by andrey.manaenko on 21.03.2017.
 */
import React from 'react';
import {editClient} from '../actions/clientsActions';
import {editClientForm} from '../actions/clientsActions';
import {editPaspSer} from '../actions/clientsActions';
import {editPaspNum} from '../actions/clientsActions';
import {editBirthDate} from '../actions/clientsActions';
import {changeOperType} from '../actions/clientsActions';

import store from '../store';
export default class Client extends React.Component{

//var cliThis ;
    constructor(props) {
        super();
    }

    componentDidMount()
    {
        //console.log("client Замаунтился, Ура!",this);

    }

// При выборе клиента в списке меняем в Сторе форму редактирования
    clickMeTender(){
        store.dispatch(changeOperType("редактируем клиента"));

        store.dispatch(editClient(Number(this.props.client.id)));
        store.dispatch(editClientForm(this.props.client.fio));
        store.dispatch(editPaspSer(this.props.client.pasp_ser));
        store.dispatch(editPaspNum(this.props.client.pasp_num));
        store.dispatch(editBirthDate(this.props.client.birth_date));
    }




    render(){
        var SelevtedName = "selected";
        var UnselectedName = "tab";
        var ClassName;
        if(this.props.client.id == this.props.editClient){
            ClassName = "selected";
        } else  ClassName = "tab";

        return(

                <tr className={ClassName} onClick={this.clickMeTender.bind(this)}>
                    
                    <td>{this.props.client.id}</td>
                    <td>{this.props.client.fio}</td>
                    <td>{this.props.client.pasp_ser}</td>
                    <td>{this.props.client.pasp_num}</td>

                </tr>

        );
    }
}