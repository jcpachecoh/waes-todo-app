jest.unmock('redux-mock-store');
jest.unmock('redux');

import { createStore } from 'redux';
import { defaultUser, userReducer } from '../reducers/user';
import { handleUsername, handlePassword, setUserId } from '../actions/userActions';

const configureMockStore = require('redux-mock-store');

describe('Test User reducer', () => {
    const mockStore = configureMockStore();
    let defaultUserMock: any, store: any, storeActions: any, username: string, userId: string, action: any, password: string;

    beforeEach(() => {
        store = createStore(userReducer);
        username = 'clean house';
        password = '123456';
        userId = 'cjf6a8so232r70125nk4myqty';
        defaultUserMock = {
            user: {
                id: '',
                username: '',
                password: '',
            }
        };
        storeActions = mockStore(defaultUserMock);
    });

    describe('Test general action', () => {
        it('Return initial state', () => {
            expect(defaultUser).toEqual(defaultUserMock);
        });
    });

    it('should call handle username', () => {
        storeActions.dispatch(handleUsername(username));
        action = storeActions.getActions();
        expect(action[0].type).toBe('handleUsername');
    });

    it('should change handle username store data', () => {
        storeActions.dispatch(handleUsername(username));
        action = storeActions.getActions();
        expect(action[0].payload).toBe(username);
    });

    it('should change handle username in the store data', () => {
        store.dispatch(handleUsername(username));
        store = store.getState();
        expect(store.user.username).toBe(username);
    });

    it('should call handle password', () => {
        storeActions.dispatch(handlePassword(password));
        action = storeActions.getActions();
        expect(action[0].type).toBe('handlePassword');
    });

    it('should change handle password store data', () => {
        storeActions.dispatch(handlePassword(password));
        action = storeActions.getActions();
        expect(action[0].payload).toBe(password);
    });

    it('should change handle password in the store data', () => {
        store.dispatch(handlePassword(password));
        store = store.getState();
        expect(store.user.password).toBe(password);
    });

    it('should call set user id', () => {
        storeActions.dispatch(setUserId(userId));
        action = storeActions.getActions();
        expect(action[0].type).toBe('setUserId');
    });

    it('should change user id store data', () => {
        storeActions.dispatch(setUserId(userId));
        action = storeActions.getActions();
        expect(action[0].payload).toBe(userId);
    });

    it('should change userid in the store data', () => {
        store.dispatch(setUserId(userId));
        store = store.getState();
        expect(store.user.id).toBe(userId);
    });
});