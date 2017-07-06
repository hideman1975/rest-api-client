/**
 * Created by andrey.manaenko on 30.06.2017.
 */
export const ADD_CLIENTS = 'ADD_CLIENTS';
export function getAllClientsFromBase(AllClients) {

    return {
        type: ADD_CLIENTS,
        AllClients: AllClients

    };
}

export const SELECT_CLIENT = 'SELECT_CLIENT';
export function selectClient(clientId) {

    return {

        type: SELECT_CLIENT,
        clientId: clientId

    };
}

export const ACTIVE_CLIENT = 'ACTIVE_CLIENT';
export function setActiveClient(client) {

    return {

        type: ACTIVE_CLIENT,
        client: client

    };
}

export const FIO_CHANGE = 'FIO_CHANGE';
export function editFIO(fio, activeClient) {

    return {

        type: FIO_CHANGE,
        fio: fio,
        activeClient: activeClient

    };
}

export const BALANCE_CHANGE = 'BALANCE_CHANGE';
export function editBalance(balance, activeClient) {

    return {

        type: BALANCE_CHANGE,
        balance: balance,
        activeClient: activeClient

    };
}

export const PHONE_CHANGE = 'PHONE_CHANGE';
export function editPhone(phone, activeClient) {

    return {

        type: PHONE_CHANGE,
        phone: phone,
        activeClient: activeClient

    };
}

export const CLEAR_CLIENT = 'CLEAR_CLIENT';
export function clearClient(id) {

    return {
        id: id,
        type: CLEAR_CLIENT

    };
}

