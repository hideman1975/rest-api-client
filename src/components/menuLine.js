
import React from 'react';
import MenuItem from './menuItem';
import store from '../store';
import {selectDisk} from '../actions/diskActions';
import {setActiveDisk} from '../actions/diskActions';


export default class MenuLine extends React.Component{

    constructor(props) {
        super();
    }

    componentDidMount()
    {
        //console.log("client Замаунтился, Ура!",this);

    }

// При выборе клиента в списке меняем в Сторе форму редактирования
    clickMeTender(){
        console.log("Ткнули в кнопку-", this);
        //store.dispatch(setActiveDisk(this.props.disk));
        //store.dispatch(selectDisk(this.props.index));
        //var i = store.getState()["selectedDisk"]; //делаем сдвиг индекса
        //store.dispatch(setActiveDisk(store.getState()["AllDisks"][i]));
    }



    render(){
        var ClassName;
        // if(this.props.disk.id == store.getState()["activeDisk"].id){
        //     ClassName = "selected";
        // } else  ClassName = "tab";
        ClassName = "tab";

        return(
            <div className="mainmenu">
            <MenuItem value="Клиенты"/>
            <MenuItem value="Диски"/>
            <MenuItem value="Заказы"/>
            <MenuItem value="Магазин"/>
            <MenuItem value="Обзоры"/>
            </div>
        );
    }
}