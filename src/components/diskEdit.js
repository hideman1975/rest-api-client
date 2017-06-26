/**
 * Created by andrey.manaenko on 21.06.2017.
 */
import React from 'react';
import store from '../store';
import {selectDisk} from '../actions/clientsActions';
import {setActiveDisk} from '../actions/clientsActions';
import {editTitle} from '../actions/clientsActions';
import {editGenre} from '../actions/clientsActions';
import {editYear} from '../actions/clientsActions';
import {clearDisk} from '../actions/clientsActions';
import {saveDisk} from '../ajaxCommander';
import {deleteDisk} from '../ajaxCommander';
import {getAllDisksFromBase} from '../actions/clientsActions';
export default class DiskEdit extends React.Component {

    constructor(props) {
        super();
    }

    componentDidMount() {
        //console.log("client Замаунтился, Ура!",this);

    }

    saveDisk(){
        console.log("Сохранить диск ID -",this.props.activeDisk.title);
        saveDisk(
            this.props.activeDisk.id,
            this.props.activeDisk.title,
            this.props.activeDisk.genre,
            this.props.activeDisk.year);
    }

    deleteDisk(){
        console.log("Удалить диск");
        deleteDisk(this.props.activeDisk.id);
        store.dispatch(clearDisk(0));
        store.dispatch(selectDisk(null));

    }

    clearDisk(){
        store.dispatch(clearDisk(this.props.activeDisk.id));
    }

    newDisk(){
        //console.log("Создать диск");
        store.dispatch(clearDisk(0));
        store.dispatch(selectDisk(null));
        //store.dispatch(setActiveDisk(null));
    }

    //____Блок изменения в полях ввода _________

    //Если смотреть вызов - вроде ничего не передаётся
    //на самом деле приходит событие вызова
    titleChange (event) {
        store.dispatch(editTitle(event.target.value, this.props.activeDisk));

    }

    directorChange (event) {
        //store.dispatch(editTitle(event.target.value, this.props.activeDisk));

    }

    genreChange (event) {
        store.dispatch(editGenre(event.target.value, this.props.activeDisk));

    }

    yearChange (event) {
        store.dispatch(editYear(event.target.value, this.props.activeDisk));

    }


    //___________________________________________

    render(){

        return(

            <div className="editbox">
                <h3>Тип операции: {"Редактируем"}</h3>
                <h4>ID: {this.props.activeDisk.id}</h4>
                <h4>Название: <input id="title" type="text"  onChange={this.titleChange.bind(this)} size="40" value = {this.props.activeDisk.title}/></h4><br/>
                <h4>Жанр:<input id="genre" type="text" onChange={this.genreChange.bind(this)} size="20" value = {this.props.activeDisk.genre}/></h4><br/>
                <h4>Режиссёр:<input id="director" type="text" onChange={this.directorChange.bind(this)} size="40" value = {"Пока пусто"}/></h4><br/>
                <h4>Год :<input id="year" type="text" onChange={this.yearChange.bind(this)} size="10" value= {this.props.activeDisk.year}/></h4><br/>
                <p>
                    <button onClick={this.saveDisk.bind(this)} >Сохранить</button>
                    <button onClick={this.clearDisk.bind(this)} >Очистить</button>
                    <button onClick={this.newDisk.bind(this)} >Создать</button>
                    <button onClick={this.deleteDisk.bind(this)} >Удалить</button>
                </p>


            </div>


        );
    }


}

//saveOldDisk(){
    //var url = "./php/editclient.php";
    //if(this.props.editClient) {
      //  if(this.props.formFio!="" && this.props.pasp_ser!="" && this.props.pasp_num!="" && this.props.birth_date!=""){
        //    postAjax(this.props.editClient, this.props.formFio,
          //      this.props.pasp_ser, this.props.pasp_num, this.props.birth_date, url);
        //} else {
          //  alert("Заполните данные клиента !");
        //}
    //} else {
      //  alert("Выберите клиента !");
    //}
//console.log("Сохраним диск");

//}