/**
 * Created by andrey.manaenko on 30.06.2017.
 */
import React from 'react';
import store from '../store';
import DisksList from './disksList';
import {clearClient, selectClient} from '../actions/clientActions';
import {editFIO, editPhone, editBalance} from '../actions/clientActions';
import {saveClient, deleteClient} from '../ajaxCommander';



export default class ClientEdit extends React.Component {

    constructor(props) {
        super();
    }

    componentDidMount() {
        //console.log("client Замаунтился, Ура!",this);

    }

    saveClient(){
        //console.log("Сохранить диск ID -",this.props.activeDisk.title);
        saveClient(
            this.props.activeClient.id,
            this.props.activeClient.fio,
            this.props.activeClient.balance,
            this.props.activeClient.phone);
    }

    deleteClient(){

        deleteClient(this.props.activeClient.id);
        store.dispatch(clearClient(0));
        store.dispatch(selectClient(null));

    }

    clearClient(){
        store.dispatch(clearClient(this.props.activeClient.id));
    }

    newClient(){

        store.dispatch(clearClient(0));
        store.dispatch(selectClient(null));

    }

    //____Блок изменения в полях ввода _________

    //Если смотреть вызов - вроде ничего не передаётся
    //на самом деле приходит событие вызова
    FIOChange (event) {
        store.dispatch(editFIO(event.target.value, this.props.activeClient));

    }

    addressChange (event) {
        //store.dispatch(editTitle(event.target.value, this.props.activeDisk));

    }

    balanceChange (event) {
        store.dispatch(editBalance(event.target.value, this.props.activeClient));

    }

    phoneChange (event) {
        store.dispatch(editPhone(event.target.value, this.props.activeClient));

    }


    //___________________________________________

    render(){

        return(

            <div id="clientbox">
                <div className="editbox">
                <h3>Тип операции: {"Редактируем"}</h3>
                <h4>ID: {this.props.activeClient.id}</h4>
                <h4>Имя : <input id="fio" type="text"  onChange={this.FIOChange.bind(this)} size="40" value = {this.props.activeClient.fio}/></h4><br/>
                <h4>Баланс:<input id="balance" type="text" onChange={this.balanceChange.bind(this)} size="20" value = {this.props.activeClient.balance}/></h4><br/>
                <h4>Телефон:<input id="phone" type="text" onChange={this.phoneChange.bind(this)} size="40" value = {this.props.activeClient.phone}/></h4><br/>
                <h4>Адрес :<input id="address" type="text" onChange={this.addressChange.bind(this)} size="10" value= {"Нижний Новгород"}/></h4><br/>
                <p>
                    <button onClick={this.saveClient.bind(this)} >Сохранить</button>
                    <button onClick={this.clearClient.bind(this)} >Очистить</button>
                    <button onClick={this.newClient.bind(this)} >Создать</button>
                    <button onClick={this.deleteClient.bind(this)} >Удалить</button>
                </p>
                    </div>
                <div>
                <DisksList AllDisks={this.props.allDisks}
                           activeDisk = {this.props.activeDisk}
                           activeClient = {this.props.activeClient}
                />
                </div>
            </div>


        );
    }


}