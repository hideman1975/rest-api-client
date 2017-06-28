
import React from 'react';
import DisksList from './disksList';
import DirectorList from './directorList';
import store from '../store';
import { connect } from 'react-redux';
import {getAllDisksFromBase} from '../actions/clientsActions';
import {getAllDirectorsFromBase} from '../actions/clientsActions';
import {getAllDisks} from '../ajaxCommander';
import {getDisksByDirector} from '../ajaxCommander';
//import {saveDisk} from '../ajaxCommander';
import {selectDisk} from '../actions/clientsActions';
import {setActiveDisk} from '../actions/clientsActions';
import {setActiveDirector} from '../actions/clientsActions';
//import {setPrevDisk} from '../actions/clientsActions';
//import {setNextDisk} from '../actions/clientsActions';

import {getAllDirectors} from '../ajaxCommander';

//Инициализация дисков
var allDisks = getAllDisks();
var filteredDisks = getDisksByDirector(5);

setTimeout(function (){console.log("filteredDisks",filteredDisks.length)}, 100);
store.dispatch(getAllDisksFromBase(filteredDisks));
var index = store.getState()["selectedDisk"]; //делаем сдвиг индекса
var activeDisk = store.getState()["AllDisks"][index];
store.dispatch(setActiveDisk(activeDisk));

//Инициализация директоров
var allDirectors = getAllDirectors();
setTimeout(function (){console.log("allDirectors",allDirectors.length)}, 100);
store.dispatch(getAllDirectorsFromBase(allDirectors));
var dirIndex = store.getState()["selectedDirector"]; //делаем сдвиг индекса
var activeDirector = store.getState()["AllDirectors"][dirIndex];
console.log("Активный директор",activeDirector);
store.dispatch(setActiveDirector(activeDirector));

class App extends React.Component{


    render(){
        var indexSelectedDisk = this.props.selectedDisk;
        //console.log("Выбранный диск",allDisks[indexSelectedDisk]);
        return(

            <div>
                <h2>Список фильмов</h2>
                <DirectorList AllDirectors={this.props.allDirectors}
                              selectedDirector = {this.props.selectedDirector}
                              activeDirector = {this.props.activeDirector}
                />
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
        activeDisk: state.activeDisk,
        allDirectors: state.AllDirectors,
        selectedDirector: state.selectedDirector,
        activeDirector: state.activeDirector
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