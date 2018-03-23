import { ActionString } from '../Action';

export const HANDLE_USERNAME = 'handleUsername';
export type HANDLE_USERNAME = typeof HANDLE_USERNAME;
export const HANDLE_PASSWORD = 'handlePassword';
export type HANDLE_PASSWORD = typeof HANDLE_PASSWORD;
export const SET_USER_ID = 'setUserId';
export type SET_USER_ID = typeof SET_USER_ID;

export class HandleUsername implements ActionString {
    type: HANDLE_USERNAME;
    payload: string;
}

export function handleUsername(username: string): HandleUsername {
    return {
        type: HANDLE_USERNAME,
        payload: username
    };
}

export class HandlePassword implements ActionString {
    type: HANDLE_PASSWORD;
    payload: string;
}

export function handlePassword(password: string): HandlePassword {
    return {
        type: HANDLE_PASSWORD,
        payload: password
    };
}

export class SetUserId implements ActionString {
    type: SET_USER_ID;
    payload: string;
}

export function setUserId(userId: string): SetUserId {
    return {
        type: SET_USER_ID,
        payload: userId
    };
}

export type userActions = HandleUsername | HandlePassword | SetUserId;