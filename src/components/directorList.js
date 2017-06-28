/**
 * Created by andrey.manaenko on 28.06.2017.
 */
import React from 'react';
import Disk from './director';
//import DiskEdit from './diskEdit';


export default class DirectorList extends React.Component{

    componentDidMount()
    {
        console.log("diskList Замаунтился, Ура!",this);

    }

    renderList()
    {
        var AllDirectors = [];
        var directorIndex = 0;
        AllDirectors = this.props.AllDirectors;

        return<div className="diskList">
            <table className="table dayShedule">
                <tbody>
                <tr>
                    <th>&nbsp;</th><th>Имя</th>
                </tr>

                {AllDirectors.map((msg) =>
                    <Disk key = {msg.id} director={msg} index={directorIndex++}/>)}
                </tbody>
            </table>
            
        </div>

    }
    render(){

        return(

            <div>
                {this.renderList()}

            </div>

        );
    }
}