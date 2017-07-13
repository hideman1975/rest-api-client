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
        
        return <table className="table listDiv">
            <caption>Перечень дисков</caption>
                <tbody>
                <tr>
                    <th>ID</th><th>Жанр</th><th>Название</th><th>Год</th><th>Действие</th>
                </tr>

                {AllDisks.map((msg) =>
                    <Disk key = {msg.id}
                          disk={msg}
                          index={diskIndex++}
                          place={this.props.place}/>)}
                </tbody>
            </table>



    }

    renderFreeDisksList()
    {
        var AllDisks = [];
        var FreeDisks = [];
        var diskIndex = 0;
        AllDisks = this.props.AllDisks;
        for (var i = 0; i<AllDisks.length; i++){
            if(AllDisks[i].client == 0) FreeDisks.push(AllDisks[i]) ;

        }

        return <table className="table listDiv">
            <caption>Перечень дисков</caption>
            <tbody>
            <tr>
                <th>ID</th><th>Жанр</th><th>Название</th><th>Год</th><th>Действие</th>
            </tr>

            {FreeDisks.map((msg) =>
                <Disk key = {msg.id}
                      disk={msg}
                      index={diskIndex++}
                      place={this.props.place}/>)}
            </tbody>
        </table>



    }

    render(){

        if (this.props.place == "orderPage"){
        return(

            <div>
                {this.renderFreeDisksList()}

            </div>

        );} else
            return(

                <div>
                    {this.renderList()}

                </div>

            );
    }
}