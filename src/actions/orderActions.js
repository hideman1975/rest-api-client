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