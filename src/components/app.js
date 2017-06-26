
import React from 'react';
import DisksList from './disksList';
import store from '../store';
import { connect } from 'react-redux';
import {getAllDisksFromBase} from '../actions/clientsActions';
import {getAllDisks} from '../ajaxCommander';
import {saveDisk} from '../ajaxCommander';
import {selectDisk} from '../actions/clientsActions';
import {setActiveDisk} from '../actions/clientsActions';
import {setPrevDisk} from '../actions/clientsActions';
import {setNextDisk} from '../actions/clientsActions';

var allDisks = getAllDisks();
setTimeout(function (){console.log("allDisks",allDisks.length)}, 100);

//store.dispatch(selectDisk(1));
store.dispatch(getAllDisksFromBase(allDisks));

var index = store.getState()["selectedDisk"]; //делаем сдвиг индекса
var activeDisk = store.getState()["AllDisks"][index];
console.log("Активный диск",activeDisk);
store.dispatch(setActiveDisk(activeDisk));

class App extends React.Component{


    render(){
        var indexSelectedDisk = this.props.selectedDisk;
        //console.log("Выбранный диск",allDisks[indexSelectedDisk]);
        return(

            <div>
                <h2>Привет from App</h2>
               
                <DisksList AllDisks={this.props.allDisks}
                           selectedDisk = {this.props.selectedDisk}
                           activeDisk = {this.props.activeDisk}

                />
            </div>

        );
    }

    //Обработка нажатия клавиш



}

const mapStateToProps = function(state) {
    return {

        //allDisks: allMessages //так делать нельзя, только из стор
        allDisks: state.AllDisks, //так делать нужно
        selectedDisk: state.selectedDisk,
        activeDisk: state.activeDisk
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