/**
 * Created by andrey.manaenko on 06.07.2017.
 */
import React from 'react';
import store from '../store';
import DisksList from './disksList';
import {clearOrder} from '../actions/orderActions';
import {editFIO, editPhone, editBalance} from '../actions/clientActions';
import {saveOrderToBase} from '../ajaxCommander';

export default class OrderEdit extends React.Component {

    constructor(props) {
        super();
    }

    saveOrder(){
        saveOrderToBase(this.props.order);
        var activeClientId = store.getState()["activeClient"].id;
        store.dispatch(clearOrder(activeClientId));
    }

    
    clOrder(){

        var activeClientId = store.getState()["activeClient"].id;
        store.dispatch(clearOrder(activeClientId));
    }

    render(){

        return(

            <div id ="orderbox">

                    <h3>Выдача дисков: {this.props.activeClient.fio}</h3>
                    <p>
                        <button onClick={this.saveOrder.bind(this)} >Сохранить</button>
                        <button onClick={this.clOrder.bind(this)} >Очистить</button>
                        
                    </p>
                    <DisksList AllDisks={this.props.order.disks}
                                place = "orderEdit"
                    />
            </div>
        );
    }
}