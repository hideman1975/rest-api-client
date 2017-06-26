/**
 * Created by andrey.manaenko on 27.03.2017.
 */
import React from 'react';
import {saveAs} from 'file-saver';
import getClients from '../getData';
import {getClientsFromBase} from '../actions/clientsActions';
import store from '../store';

export default class FotoScan extends React.Component{
    getFoto(){
        //Скачать фото
        var url = './php/getfoto.php?id=' + this.props.editClient;
        postAjax(url);

    }

    componentDidMount(){
        console.log('замаунтиля');
        fileInput();

    }

    render(){
        var mySrc = './php/getfoto.php?id=' + this.props.editClient;
        return(

            <div>
                <h1>Фото клиента</h1>
                <br/>
                <img id="chosenF" className = "fotoScan" src={mySrc}></img>
                <br/>
                <h4>Сменить фото </h4>
                <form id="file-form" action="" method="post" encType="multipart/form-data">
                    <input type="hidden" name="imageId" value = {this.props.editClient}/>
                    <input type="hidden" name="formFio" value = {this.props.formFio}/>
                    <input type="hidden" name="pasp_num" value = {this.props.pasp_num}/>
                    <input type="hidden" name="pasp_ser" value = {this.props.pasp_ser}/>
                    <input type="hidden" name="birth_date" value = {this.props.birth_date}/>
                    <input  id="file-select" type="file" name="photo"/>

                </form>
                <br/>
                <button onClick={ajax_post} >Сохранить</button>
                <button onClick={this.getFoto.bind(this)} >Скачать фото</button>
            </div>

        );
    }
}

function fileInput(){
    "use strict";
var chosenFile =  document.getElementById("file-select");
    console.log("Кого выбрали ?",chosenFile);
    chosenFile.addEventListener("change",
        function(e){
            var file = this.files ? this.files[0] : { name: this.value },
            img = document.getElementById("chosenF"),
            fileReader = window.FileReader ? new FileReader() : null;
            console.log("file",this.files);
            console.log("fileReader",window.FileReader);
            if (file) {
                if (fileReader){
                    if (file.type.indexOf("image") !== -1){
                        fileReader.addEventListener("loadend", function(e) {
                            img.src = e.target.result; }, false);
                        fileReader.readAsDataURL(file); } else
    { alert("Попробуйте выбрать файл изображения)"); } } else
    { alert("Извините, но ваш браузер не достаточно умный( Попробуйте Chrome");
    }
            }
    }, false);

   }

//получает файл из базы и сохраняет на диск
function  postAjax(url){
    "use strict";
    var oReq = new XMLHttpRequest();
    oReq.open("GET", url, true);
    oReq.responseType = "arraybuffer";
    oReq.onload = function(oEvent) {
        var blob = new Blob([oReq.response], {type: "image/png"});
        saveAs(blob, "image.png");

    };
    oReq.send();
}

//_________________________Проверенный AJAX

function createXMLHttp() {
    console.log("из createXMLHttp()");
    if (typeof XMLHttpRequest != "undefined") { // для браузеров аля Mozilla
        return new XMLHttpRequest();
    } else if (window.ActiveXObject) { // для Internet Explorer (all versions)
        var aVersions = [
            "MSXML2.XMLHttp.5.0",
            "MSXML2.XMLHttp.4.0",
            "MSXML2.XMLHttp.3.0",
            "MSXML2.XMLHttp",
            "Microsoft.XMLHttp"
        ];
        for (var i = 0; i < aVersions.length; i++) {
            try {
                var oXmlHttp = new ActiveXObject(aVersions[i]);
                return oXmlHttp;
            } catch (oError) {}
        }
        throw new Error("Невозможно создать объект XMLHttp.");
    }
}


function ajax_post(){
    console.log("ajax_post() running");
    // Create our XMLHttpRequest object
    var hr = new XMLHttpRequest();
    // Create some variables we need to send to our PHP file
    var url = "./php/savefoto.php";
    hr.open("POST", url, true);
    hr.onreadystatechange = function() {
        if(hr.readyState == 4 && hr.status == 200) {
            reloadClients();
            var return_data = hr.responseText;
            //document.getElementById("message").innerHTML = return_data;
            console.log("ответ savefoto.php", return_data)
        }
    }
    // Send the data to PHP now... and wait for response to update the status div
    var formData = new FormData(document.querySelector("form"));
    hr.send(formData);

}

function reloadClients(){
    getNewMessage();
    function getNewMessage() {
        var AllClients = getClients();


        //Берём данные из базы и сохраняем в store
        store.dispatch(getClientsFromBase(AllClients));
        //store.dispatch(changeOperType("выбрать клиента"));
    }
}

