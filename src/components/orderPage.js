/**
 * Created by andrey.manaenko on 06.07.2017.
 */
import React from 'react';
import store from '../store';
import DisksList from './disksList';
import OrderEdit from './orderEdit';


export default class OrderPage extends React.Component{

    constructor(props) {
        super();
    }

    render(){
        var ClassName;
        if("Заказы" == store.getState()["activePage"]){
            ClassName = "activePage";
        } else  ClassName = "passivePage";

        return(

            <div className={ClassName}>
                
                <DisksList AllDisks={this.props.filteredDisks}
                           place = "orderPage"
                />
                <OrderEdit order = {this.props.order}
                            activeClient = {this.props.activeClient}/>

            </div>

        );
    }
}