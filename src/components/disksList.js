/**
 * Created by andrey.manaenko on 19.06.2017.
 */
import React from 'react';
import Disk from './disk';

export default class DisksList extends React.Component{

    renderList()
    {
        var AllDisks = [];
        var diskIndex = 0;
        AllDisks = this.props.AllDisks;

        return <table className="table">
            <caption>Диски проката</caption>
                <tbody>
                <tr>
                    <th>&nbsp;</th><th>Жанр</th><th>Название</th><th>Год</th>
                </tr>

                {AllDisks.map((msg) =>
                    <Disk key = {msg.id} disk={msg} index={diskIndex++} />)}
                </tbody>
            </table>



    }
    render(){

        return(

            <div>
                {this.renderList()}

            </div>

        );
    }
}