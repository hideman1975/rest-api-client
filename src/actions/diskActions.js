/**
 * Created by andrey.manaenko on 29.06.2017.
 */
export const ADD_DISKS = 'ADD_DISKS';
export function getAllDisksFromBase(AllDisks) {

    return {
        type: ADD_DISKS,
        AllDisks: AllDisks

    };
}

export const STORE_GETS_ALLDISKS = 'STORE_GETS_ALLDISKS';
export function storeGetsAllDisks(DisksArray) {

    return {
        type: STORE_GETS_ALLDISKS,
        DisksArray: DisksArray

    };
}


export const GET_DISKS = 'GET_DISKS';
export function getDisksByClient(ClientDisks) {

    return {
        type: GET_DISKS,
        ClientDisks: ClientDisks

    };
}

export const SELECT_DISK = 'SELECT_DISK';
export function selectDisk(diskId) {

    return {

        type: SELECT_DISK,
        diskId: diskId

    };
}

export const ACTIVE_DISK = 'ACTIVE_DISK';
export function setActiveDisk(disk) {

    return {

        type: ACTIVE_DISK,
        disk: disk

    };
}

export const ID_CHANGE = 'ID_CHANGE';
export function editId(id, activeDisk) {

    return {

        type: ID_CHANGE,
        id: id,
        activeDisk: activeDisk

    };
}

export const TITLE_CHANGE = 'TITLE_CHANGE';
export function editTitle(title, activeDisk) {

    return {

        type: TITLE_CHANGE,
        title: title,
        activeDisk: activeDisk

    };
}

export const GENRE_CHANGE = 'GENRE_CHANGE';
export function editGenre(genre, activeDisk) {

    return {

        type: GENRE_CHANGE,
        genre: genre,
        activeDisk: activeDisk

    };
}

export const YEAR_CHANGE = 'YEAR_CHANGE';
export function editYear(year, activeDisk) {

    return {

        type: YEAR_CHANGE,
        year: year,
        activeDisk: activeDisk

    };
}

export const CLEAR_DISK = 'CLEAR_DISK';
export function clearDisk(id) {

    return {
        id: id,
        type: CLEAR_DISK

    };
}
