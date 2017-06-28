//require("!style!css!./style.css");
import {getAllDisksFromBase} from './actions/clientsActions';
import store from './store';

//var messages = [];

var message;
//при запуске выполняем запросы к базе
getAllDisks();
//getMessage();

//а через 100 милисекунд выводим значение массивов

//setTimeout(function (){console.log("по-новому",messages);}, 100);
//setTimeout(function (){console.log("одинокий мессадж",message);}, 1000);

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


export function getAllDisks() {

    var messages = [];
    var oXmlHttp = createXMLHttp();
    var url = "http://manaenko:9999/rest-api_03/resources/disks/alljson";
    oXmlHttp.open("GET", url, false);
    oXmlHttp.setRequestHeader("Content-Type", "text/plain");
    // описание функции, которая будет вызвана, когда придет ответ от сервера
    oXmlHttp.onreadystatechange = function() {

        if (oXmlHttp.readyState == 4 && oXmlHttp.status == 200) {
           messages = JSON.parse(oXmlHttp.responseText);
        }
    };

    oXmlHttp.send();
    return messages;
}

export function getDisksByDirector(id) {

    var messages = [];
    var oXmlHttp = createXMLHttp();
    var url = "http://manaenko:9999/rest-api_03/resources/disks/director_id/"+id;
    oXmlHttp.open("GET", url, false);
    oXmlHttp.setRequestHeader("Content-Type", "text/plain");
    // описание функции, которая будет вызвана, когда придет ответ от сервера
    oXmlHttp.onreadystatechange = function() {

        if (oXmlHttp.readyState == 4 && oXmlHttp.status == 200) {
            messages = JSON.parse(oXmlHttp.responseText);
        }
    };

    oXmlHttp.send();
    return messages;
}

export function deleteDisk(id) {

    var messages = [];
    var oXmlHttp = createXMLHttp();
    var url = "http://manaenko:9999/rest-api_03/resources/disks/deletedisk/"+id;
    oXmlHttp.open("GET", url, false);
    oXmlHttp.setRequestHeader("Content-Type", "text/plain");
    // описание функции, которая будет вызвана, когда придет ответ от сервера
    oXmlHttp.onreadystatechange = function() {

        if (oXmlHttp.readyState == 4 && oXmlHttp.status == 200) {
            console.log("Диск с айдишником удалён", id);
            reloadDisks();
        }
    };

    oXmlHttp.send();

}

// функция Ajax POST
export function saveDisk(id, title, genre, year) {
    // создаем Объект
    console.log("из postAjax");
    var url = "http://manaenko:9999/rest-api_03/resources/disks/post";
    var oXmlHttp = createXMLHttp();

    // конкатинируем данные
    var sBody = "id="+id+"&title="+title+"&genre="+genre+"&year="+year;
    // подготовка, объявление заголовков
    oXmlHttp.open("POST", url, true);

    oXmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    // описание функции, которая будет вызвана, когда придет ответ от сервера
    oXmlHttp.onreadystatechange = function() {
        if (oXmlHttp.readyState == 4 && oXmlHttp.status == 200) {
            var return_data = oXmlHttp.responseText;
            console.log("Ответ пришёл", return_data);
            reloadDisks();
        }
    };
    // отправка запроса, sBody - строка данных с формы
    oXmlHttp.send(sBody);
}

function reloadDisks(){

        var allDisks = getAllDisks();
        //Берём данные из базы и сохраняем в store
    store.dispatch(getAllDisksFromBase(allDisks));
        //store.dispatch(changeOperType("выбрать клиента"));
    }


//Теперь директор! Я сказал Директор!

export function getAllDirectors() {

    var messages = [];
    var oXmlHttp = createXMLHttp();
    var url = "http://manaenko:9999/rest-api_03/resources/director/alljson";
    oXmlHttp.open("GET", url, false);
    oXmlHttp.setRequestHeader("Content-Type", "text/plain");
    // описание функции, которая будет вызвана, когда придет ответ от сервера
    oXmlHttp.onreadystatechange = function() {

        if (oXmlHttp.readyState == 4 && oXmlHttp.status == 200) {
            messages = JSON.parse(oXmlHttp.responseText);
        }
    };

    oXmlHttp.send();
    return messages;
}