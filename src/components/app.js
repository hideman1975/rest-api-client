
import React from 'react';
import DisksList from './disksList';
import ClientList from './clientList';
import store from '../store';
import { connect } from 'react-redux';

import {getAllClientsFromBase, setActiveClient} from '../actions/clientActions';
import {getDisksByClient, getAllClients} from '../ajaxCommander';
import {selectDisk, setActiveDisk, getAllDisksFromBase} from '../actions/diskActions';

const filteredDisks = getDisksByClient(1);

//Инициализация клиентов
var allClients = getAllClients();
store.dispatch(getAllClientsFromBase(allClients));
var activeClient = store.getState()["AllClients"][0];
store.dispatch(setActiveClient(activeClient));

//setTimeout(function (){console.log("filteredDisks",filteredDisks.length)}, 100);
store.dispatch(getAllDisksFromBase(filteredDisks));
var activeDisk = store.getState()["AllDisks"][0];
store.dispatch(setActiveDisk(activeDisk));

class App extends React.Component{

    render(){
        return(

            <div>
                <h2>Клиенты проката</h2>
                <ClientList AllClients={this.props.allClients}
                            activeClient = {this.props.activeClient}
                            allDisks={this.props.allDisks}
                            activeDisk = {this.props.activeDisk}
                />
                                
            </div>

        );
    }

    //Обработка нажатия клавиш
}

const mapStateToProps = function(state) {
    return {
        allDisks: state.AllDisks,
        activeDisk: state.activeDisk,
        allClients: state.AllClients,
        activeClient: state.activeClient
    };
};

export default connect(mapStateToProps)(App);

document.addEventListener("keydown", keyDownTextField, false);

function keyDownTextField(e) {
    var selectedDisk = store.getState()["selectedDisk"];
    var keyCode = e.keyCode;

    if (keyCode == 40) {
        console.log("Вниз");

        selectedDisk++;
        if (selectedDisk  < store.getState()["AllDisks"].length) {
            console.log("Вниз идём или нет?");
            store.dispatch(selectDisk(selectedDisk));
            store.dispatch(setActiveDisk(store.getState()["AllDisks"][selectedDisk]));
        } else {
            selectedDisk--;
        }
    }
    if (keyCode == 38) {
        console.log("Вверх");
        if (selectedDisk > 0) {
           selectedDisk--;

            store.dispatch(selectDisk(selectedDisk));
            store.dispatch(setActiveDisk(store.getState()["AllDisks"][selectedDisk]));
        }

    }

}