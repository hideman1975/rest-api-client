
export default function index(state, action) {
//Пишем редьюсеры для Бюро Проката дисков
    if (action.type === 'ADD_DISKS') return {...state, AllDisks: action.AllDisks};
    if (action.type === 'ADD_DIRECTORS') return {...state, AllDirectors: action.AllDirectors};
    if (action.type === 'ADD_CLIENTS') return {...state, AllClients: action.AllClients};

    if (action.type === 'SELECT_DISK') return {...state, selectedDisk: action.diskId};
    if (action.type === 'SELECT_DIRECTOR') return {...state, selectedDirector: action.directorId};
    if (action.type === 'SELECT_CLIENT') return {...state, selectedClient: action.clientId};

    if (action.type === 'ACTIVE_DISK') return {...state, activeDisk: action.disk};
    if (action.type === 'ACTIVE_DIRECTOR') return {...state, activeDirector: action.director};
    if (action.type === 'ACTIVE_CLIENT') return {...state, activeClient: action.client};

    if (action.type === 'TITLE_CHANGE')
        return {...state, activeDisk: {...action.activeDisk, title: action.title}};

    if (action.type === 'GENRE_CHANGE')
        return {...state, activeDisk: {...action.activeDisk, genre: action.genre}};
    if (action.type === 'YEAR_CHANGE')
        return {...state, activeDisk: {...action.activeDisk, year: action.year}};
    if (action.type === 'ID_CHANGE')
        return {...state, activeDisk: {...action.activeDisk, id: action.id}};
    if (action.type === 'CLEAR_DISK')
        return {
            ...state, activeDisk: {
                ...action.activeDisk,
                id: action.id,
                title: "",
                genre: "",
                year: ""
            }
        };

//работа с клиентом

    if (action.type === 'FIO_CHANGE')
        return {...state, activeClient: {...action.activeClient, fio: action.fio}};
    if (action.type === 'BALANCE_CHANGE')
        return {...state, activeClient: {...action.activeClient, balance: action.balance}};
    if (action.type === 'PHONE_CHANGE')
        return {...state, activeClient: {...action.activeClient, phone: action.phone}};

    return state;
}