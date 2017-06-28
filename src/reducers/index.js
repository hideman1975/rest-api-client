

export default function(state, action) {
//Пишем редьюсеры для Бюро Проката дисков
    if (action.type === 'ADD_DISKS') return {...state, AllDisks: action.AllDisks};
    if (action.type === 'ADD_DIRECTORS') return {...state, AllDirectors: action.AllDirectors};

    if (action.type === 'SELECT_DISK') return {...state, selectedDisk: action.diskId};
    if (action.type === 'SELECT_DIRECTOR') return {...state, selectedDirector: action.directorId};

    if (action.type === 'ACTIVE_DISK') return {...state, activeDisk: action.disk};
    if (action.type === 'ACTIVE_DIRECTOR') return {...state, activeDirector: action.director};

    if (action.type === 'TITLE_CHANGE')
        return {...state, activeDisk: {...action.activeDisk, title: action.title}};
    if (action.type === 'GENRE_CHANGE')
        return {...state, activeDisk: {...action.activeDisk, genre: action.genre}};
    if (action.type === 'YEAR_CHANGE')
        return {...state, activeDisk: {...action.activeDisk, year: action.year}};
    if (action.type === 'ID_CHANGE')
        return {...state, activeDisk: {...action.activeDisk, id: action.id}};
    if (action.type === 'CLEAR_DISK')
        return {...state, activeDisk: {...action.activeDisk, 
            id: action.id,
            title: "",
            genre: "",
            year: ""}};





    //_________________ниже - мусор прошлых проектов_______________________________
    if (action.type === 'ADD_CLIENTS') {

        return {...state, clients: action.clients}
    }
    
    if (action.type === 'EDIT_CLIENT') {
        if (action.clientId) {
            var clients = state.clients;
            var newFio = clients[action.clientId].fio;
            var newPaspSer = clients[action.clientId].pasp_ser;
            var newPaspNum = clients[action.clientId].pasp_num;
            var newBirthDate = clients[action.clientId].birth_date;
            console.log("Клиенты тут", clients);

            //console.log(clients.size());
            console.log(clients.length);
            console.log("Выбран клиент -", action.clientId);
            console.log("ФИО клиента -", clients[action.clientId].fio);
            var nextClient = null;
            var prevClient = null;

            //Находим следующий элемент
            var i = action.clientId;
            i++;
            for (i; i < clients.length; i++) {
                if (clients[i] != undefined) {
                    console.log("след элемент", i);
                    nextClient = i;
                    break;
                }
            }

            //Находим предыдущий элемент
            var y = action.clientId;
            y--;
            for (y; y > 0; y--) {
                if (clients[y] != undefined) {
                    console.log("предыдущий элемент", y);
                    prevClient = y;
                    break;
                }

            }

            return {
                ...state, editClient: action.clientId,
                next_client: nextClient,
                prev_client: prevClient,
                formFio: newFio,
                pasp_ser: newPaspSer,
                pasp_num: newPaspNum,
                birth_date: newBirthDate
            }
        }  else {
        console.log("Просто обнули клиента");
            return {
                ...state, editClient: action.clientId,
                next_client: null,
                prev_client: null
            }
        }
    }

    if (action.type === 'NEW_CLIENT'){
        return {...state, newClient: action.newClient}
    }
    
    if (action.type === 'EDIT_CLIENT_FORM'){
        return {...state, formFio: action.formFio}
    }
    if (action.type === 'EDIT_PASP_SER'){
        return {...state, pasp_ser: action.pasp_ser}
    }
    if (action.type === 'EDIT_PASP_NUM'){
        return {...state, pasp_num: action.pasp_num}
    }

    if (action.type === 'EDIT_BIRTH_DATE'){
        return {...state, birth_date: action.birth_date}
    }

    if (action.type === 'CHANGE_OPER_TYPE'){
        return {...state, oper_type: action.oper_type}
    }
    
    if (action.type === 'SWITCH_PAGE'){
        var clearPages = {
            Chatclass: "passivePage",
            Contactclass: "passivePage",
            Fotoclass: "passivePage",
            Messageclass: "passivePage",
            Lessonsclass: "passivePage"
        };
        var menuIcons = ["menuitem", "menuitem", "menuitem", "menuitem", "menuitem"];

       switch (action.menuItem){
           case 'CHAT':
               clearPages.Chatclass = "activePage";
               menuIcons[1] = "menuitemActive";
               break;
           case 'CONTACTS':
               clearPages.Contactclass = "activePage";
               menuIcons[4] = "menuitemActive";
               break;
           case 'FOTOS':
               clearPages.Fotoclass = "activePage";
               menuIcons[2] = "menuitemActive";
               break;
           case 'NEWS':
               clearPages.Messageclass = "activePage";
               menuIcons[3] = "menuitemActive";
               break;
           case 'SHEDULE':
               clearPages.Lessonsclass = "activePage";
               menuIcons[0] = "menuitemActive";
               break;
           default: break;
       }

        return {...state, pages: clearPages, menuItem: menuIcons }
    }

    if(action.type === 'SWITCH_DAY'){
        return {...state, dayShedule: action.dayShed}

    }

        
    return state;
}