/**
 * Created by andrey.manaenko on 21.03.2017.
 */
import React from 'react';
import store from '../store';
import {editClientForm} from '../actions/clientsActions';
import {editPaspSer} from '../actions/clientsActions';
import {editPaspNum} from '../actions/clientsActions';
import {editBirthDate} from '../actions/clientsActions';
import {editClient} from '../actions/clientsActions';
import {newClient} from '../actions/clientsActions';
import getClients from '../getData';
import {getClientsFromBase} from '../actions/clientsActions';
import {changeOperType} from '../actions/clientsActions';
import FotoScan from './fotoScan';


export default class ClientEdit extends React.Component{

    constructor(props) {
        super();
    }

    componentDidMount()
    {
        //console.log("client Замаунтился, Ура!",this);

    }



    saveOldClient(){
        var url = "./php/editclient.php";
        if(this.props.editClient) {
            if(this.props.formFio!="" && this.props.pasp_ser!="" && this.props.pasp_num!="" && this.props.birth_date!=""){
            postAjax(this.props.editClient, this.props.formFio,
                this.props.pasp_ser, this.props.pasp_num, this.props.birth_date, url);
            } else {
                alert("Заполните данные клиента !");
            }
        } else {
              alert("Выберите клиента !");
        }


    }

    saveNewClient(){
        console.log("Новый клиент сохраняется");
        var url = "./php/newclient.php";
        if(this.props.formFio!="" && this.props.pasp_ser!="" && this.props.pasp_num!="" && this.props.birth_date!=""){
            postAjax(this.props.editClient, this.props.formFio,
                this.props.pasp_ser, this.props.pasp_num, this.props.birth_date, url);
            store.dispatch(newClient(false));
            store.dispatch(changeOperType("редактируем клиента"));
        } else {
            alert("Заполните данные клиента !");
        }


    }

    saveClient(){
        if(this.props.newClient == false){
            this.saveOldClient();
        } else
            this.saveNewClient();

    }


    clearClient(){
        console.log("Очистить карточку");
        store.dispatch(editClientForm(""));
        store.dispatch(editPaspSer(""));
        store.dispatch(editPaspNum(""));
        store.dispatch(editBirthDate(""));

    }

    newClient(){
        console.log("Новый клиент");
        this.clearClient();
        store.dispatch(editClient(null));
        store.dispatch(newClient(true));
        store.dispatch(changeOperType("новый клиент"));

    }

    delClient(){
        console.log("удалить клиента");
        var url = "./php/delclient.php";
        postAjax(this.props.editClient, this.props.formFio,
            this.props.pasp_ser, this.props.pasp_num, this.props.birth_date, url);


        this.clearClient();
        store.dispatch(editClient(null));
        store.dispatch(changeOperType("выбрать клиента"));


    }

    fioChange (name) {
        store.dispatch(editClientForm(name.target.value));
    }

    paspSerChange (name) {
        store.dispatch(editPaspSer(name.target.value));
    }

    paspNumChange (name) {
        store.dispatch(editPaspNum(name.target.value));
    }

    birthDateChange (name) {
        store.dispatch(editBirthDate(name.target.value));
    }

    render(){

        return(
            <div className="editbox">
                <h3>Тип операции: {this.props.oper_type}</h3>
                <h4>ID: {this.props.editClient}</h4>
                <h4>ФИО клиента: <input id="fio" type="text"  onChange={this.fioChange.bind(this)} size="40" value = {this.props.formFio}/></h4><br/>
                <h4>паспорт серия:<input id="pasp_ser" type="text" onChange={this.paspSerChange.bind(this)} size="4" value = {this.props.pasp_ser}/></h4><br/>
                <h4>паспорт номер:<input id="pasp_num" type="text" onChange={this.paspNumChange.bind(this)} size="10" value = {this.props.pasp_num}/></h4><br/>
                <h4>дата рождения:<input id="birth_date" type="date" onChange={this.birthDateChange.bind(this)} size="10" value= {this.props.birth_date}/></h4><br/>
                <p>
                    <button onClick={this.saveClient.bind(this)} >Сохранить</button>
                    <button onClick={this.clearClient.bind(this)} >Очистить</button>
                    <button onClick={this.newClient.bind(this)} >Создать</button>
                    <button onClick={this.delClient.bind(this)} >Удалить</button>
                </p>

            <FotoScan editClient = {this.props.editClient}
                      formFio={this.props.formFio}
                      pasp_ser={this.props.pasp_ser}
                      pasp_num={this.props.pasp_num}
                      birth_date={this.props.birth_date}/>

            </div>

        );
    }
}


function createXMLHttp() {
    console.log("из createXMLHttp()");
    if (typeof XMLHttpRequest != "undefined") { // для браузеров аля Mozilla
        return new XMLHttpRequest();
    } else if (window.ActiveXObject) { // для Internet Explorer (all versions)
        var aVersions = [
            "MSXML2.XMLHttp.5.0",
            "MSXML2.XMLHttp.4.0",
            "MSXML2.XMLHttp.3.0",
            "MSXML2.XMLHttp",
            "Microsoft.XMLHttp"
        ];
        for (var i = 0; i < aVersions.length; i++) {
            try {
                var oXmlHttp = new ActiveXObject(aVersions[i]);
                return oXmlHttp;
            } catch (oError) {}
        }
        throw new Error("Невозможно создать объект XMLHttp.");
    }
}


// функция Ajax POST
function postAjax(idClient, fio, pasp_ser, pasp_num, birth_date, url) {
    // создаем Объект
    console.log("из postAjax");
    var oXmlHttp = createXMLHttp();

    // конкатинируем данные
    var sBody = "fio="+fio+"&pasp_ser="+pasp_ser+"&pasp_num="+
                        pasp_num+"&birth_date="+birth_date+"&id="+idClient;
    // подготовка, объявление заголовков
    oXmlHttp.open("POST", url, true);

    oXmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    // описание функции, которая будет вызвана, когда придет ответ от сервера
    oXmlHttp.onreadystatechange = function() {
        if (oXmlHttp.readyState == 4 && oXmlHttp.status == 200) {
            var return_data = oXmlHttp.responseText;
            console.log("Ответ пришёл", return_data);
            reloadClients();
        }
    };
    // отправка запроса, sBody - строка данных с формы
    oXmlHttp.send(sBody);
}

function reloadClients(){
    getNewMessage();
    function getNewMessage() {
        var AllClients = getClients();


        //Берём данные из базы и сохраняем в store
        store.dispatch(getClientsFromBase(AllClients));
        //store.dispatch(changeOperType("выбрать клиента"));
    }
}