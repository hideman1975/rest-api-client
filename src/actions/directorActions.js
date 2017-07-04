/**
 * Created by andrey.manaenko on 29.06.2017.
 */
export const ADD_DIRECTORS = 'ADD_DIRECTORS';
export function getAllDirectorsFromBase(AllDirectors) {

    return {
        type: ADD_DIRECTORS,
        AllDirectors: AllDirectors

    };
}

export const SELECT_DIRECTOR = 'SELECT_DIRECTOR';
export function selectDirector(directorId) {

    return {

        type: SELECT_DIRECTOR,
        directorId: directorId

    };
}

export const ACTIVE_DIRECTOR = 'ACTIVE_DIRECTOR';
export function setActiveDirector(director) {

    return {

        type: ACTIVE_DIRECTOR,
        director: director

    };
}

