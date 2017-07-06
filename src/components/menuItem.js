
import React from 'react';
import store from '../store';
import {selectDisk} from '../actions/diskActions';
import {setActiveDisk} from '../actions/diskActions';
import {menuClick} from '../actions/menuActions';


export default class MenuItem extends React.Component{

    constructor(props) {
        super();
    }

    componentDidMount()
    {
        //console.log("client Замаунтился, Ура!",this);

    }

// При выборе клиента в списке меняем в Сторе форму редактирования
    clickMeTender(){
        console.log("Ткнули в кнопку-", this.props.value);
        store.dispatch(menuClick(this.props.value));
        //store.dispatch(selectDisk(this.props.index));
        //var i = store.getState()["selectedDisk"]; //делаем сдвиг индекса
        //store.dispatch(setActiveDisk(store.getState()["AllDisks"][i]));
    }



    render(){
        var ClassName;
        if(this.props.value == store.getState()["activePage"]){
            ClassName = "menuitemActive";
         } else  ClassName = "menuitem";


        return(

            <div className={ClassName} onClick={this.clickMeTender.bind(this)}>
                <h2>{this.props.value}</h2>
            </div>

        );
    }
}