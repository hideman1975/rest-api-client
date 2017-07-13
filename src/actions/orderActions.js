/**
 * Created by andrey.manaenko on 06.07.2017.
 */
export const ADD_DISK_TO_ORDER = 'ADD_DISK_TO_ORDER';
export function addDiskToOrder(disk, clientId) {

    return {
        type: ADD_DISK_TO_ORDER,
        disk: disk,
        clientId: clientId

    };
}

export const REMOVE_DISK_FROM_ORDER = 'REMOVE_DISK_FROM_ORDER';
export function removeDiskFromOrder(disk, clientId) {

    return {
        type: REMOVE_DISK_FROM_ORDER,
        disk: disk,
        clientId: clientId
        
        
    };
}

export const CLEAR_ORDER = 'CLEAR_ORDER';
export function clearOrder(clientId) {

    return {
        type: CLEAR_ORDER,
        clientId: clientId


    };
}