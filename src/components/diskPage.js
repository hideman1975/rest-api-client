/**
 * Created by andrey.manaenko on 04.07.2017.
 */
import React from 'react';
import store from '../store';
import DisksList from './disksList';
import DiskEdit from './diskEdit';



export default class DiskPage extends React.Component{

    constructor(props) {
        super();
    }

      render(){
         var ClassName;
        if("Диски" == store.getState()["activePage"]){
            ClassName = "activePage";
        } else  ClassName = "passivePage";

        return(

            <div className={ClassName}>
                <DisksList AllDisks={this.props.filteredDisks}
                           activeDisk = {this.props.activeDisk}
                           activeClient = {this.props.activeClient}
                           place = "diskPage"
                />
                <DiskEdit activeDisk = {this.props.activeDisk}/>
            </div>

        );
    }
}