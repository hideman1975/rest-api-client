/**
 * Created by andrey.manaenko on 19.06.2017.
 */
import React from 'react';
import Disk from './disk';
import DiskEdit from './diskEdit';


export default class DisksList extends React.Component{

    componentDidMount()
    {
        console.log("diskList Замаунтился, Ура!",this);

    }

    renderList()
    {
        var AllDisks = [];
        var diskIndex = 0;
        AllDisks = this.props.AllDisks;

        return <table className="table">
            <caption>Выдано клиенту</caption>
                <tbody>
                <tr>
                    <th>&nbsp;</th><th>Жанр</th><th>Название</th><th>Год</th>
                </tr>

                {AllDisks.map((msg) =>
                    <Disk key = {msg.id} disk={msg} index={diskIndex++}/>)}
                </tbody>
            </table>



    }
    render(){

        return(

            <div>
                {this.renderList()}
                <DiskEdit activeDisk={this.props.activeDisk}/>
            </div>

        );
    }
}