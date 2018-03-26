jest.unmock('redux-mock-store');
jest.unmock('redux');

import { createStore } from 'redux';
import { defaultTodos, todoReducer } from '../reducers/todos';
import { changeTodoTaskInput, showAll, showActive, setShowModalTask, setTodoPage, setShowModalConfirm, setShowAddList, changeTodoListInput, showCompleted } from '../actions/index';

const configureMockStore = require('redux-mock-store'); 

describe('Test Client reducer', () => {
    const mockStore = configureMockStore();
    let defaultTodosMock: any, store: any, storeActions: any, task: string, action: any, listname: string;

    beforeEach(() => {
        store = createStore(todoReducer);
        task = 'clean house';
        listname = 'todolist';
        defaultTodosMock = {
            task: {
                id: '',
                task: '',
                done: false,
            },
            pageId: 'cjevh01zwyu0w0148vql4vrck',
            showModalTask: false,
            showActiveFlag: false,
            showConfirmModal: false,
            updateFlag: false,
            showAddList: false,
            todoList: {
                id: '',
                listname: ''
            }
        };
        storeActions = mockStore(defaultTodosMock);
    });

    describe('Test general action', () => {
        it('Return initial state', () => {
            expect(defaultTodos).toEqual(defaultTodosMock);
        });
    });

    it('should change action task input', () => {
        storeActions.dispatch(changeTodoTaskInput(task));
        action = storeActions.getActions();
        expect(action[0].type).toBe('ChangeTodoTaskInput');
    });

    it('should change action task store data', () => {
        storeActions.dispatch(changeTodoTaskInput(task));
        action = storeActions.getActions();
        expect(action[0].payload).toBe(task);
    });

    it('should change action task in the store data', () => {
        store.dispatch(changeTodoTaskInput(task));
        store = store.getState();
        expect(store.task.task).toBe(task);
    });

    it('should call show all', () => {
        storeActions.dispatch(showAll());
        action = storeActions.getActions();
        expect(action[0].type).toBe('ShowAll');
    });

    /////////////////////////
    it('should change action task input', () => {
        storeActions.dispatch(setShowModalTask(true));
        action = storeActions.getActions();
        expect(action[0].type).toBe('SetShowModalTask');
    });

    it('should change action task store data', () => {
        storeActions.dispatch(setShowModalTask(true));
        action = storeActions.getActions();
        expect(action[0].payload).toBe(true);
    });

    it('should change action task in the store data', () => {
        store.dispatch(setShowModalTask(true));
        store = store.getState();
        expect(store.showModalTask).toBe(true);
    });

    it('should call show active', () => {
        storeActions.dispatch(showActive());
        action = storeActions.getActions();
        expect(action[0].type).toBe('ShowActive');
    });

    it('should change store showActiveFlag in the store data', () => {
        store.dispatch(showActive());
        store = store.getState();
        expect(store.showActiveFlag).toBe(false);
    });

    it('should call show completed', () => {
        storeActions.dispatch(showCompleted());
        action = storeActions.getActions();
        expect(action[0].type).toBe('ShowCompleted');
    });

    it('should change store showActiveFlag in the store data', () => {
        store.dispatch(showCompleted());
        store = store.getState();
        expect(store.showActiveFlag).toBe(true);
    });

    it('should call action set todo page', () => {
        storeActions.dispatch(setTodoPage(defaultTodosMock.pageId));
        action = storeActions.getActions();
        expect(action[0].type).toBe('SetTodoPage');
    });

    it('should change action todo page store data', () => {
        storeActions.dispatch(setTodoPage(defaultTodosMock.pageId));
        action = storeActions.getActions();
        expect(action[0].payload).toBe(defaultTodosMock.pageId);
    });

    it('should change store pageId in the store data', () => {
        store.dispatch(setTodoPage(defaultTodosMock.pageId));
        store = store.getState();
        expect(store.pageId).toBe(defaultTodosMock.pageId);
    });

    it('should call action set show modal confirm', () => {
        storeActions.dispatch(setShowModalConfirm(true));
        action = storeActions.getActions();
        expect(action[0].type).toBe('SetShowModalConfirm');
    });

    it('should change action set show modal confirm store data', () => {
        storeActions.dispatch(setShowModalConfirm(true));
        action = storeActions.getActions();
        expect(action[0].payload).toBe(true);
    });

    it('should change store showConfirmModal in the store data', () => {
        store.dispatch(setShowModalConfirm(true));
        store = store.getState();
        expect(store.showConfirmModal).toBe(true);
    });

    it('should call action set show modal add list', () => {
        storeActions.dispatch(setShowAddList(true));
        action = storeActions.getActions();
        expect(action[0].type).toBe('SetShowAddList');
    });

    it('should change action set show modal add list action data', () => {
        storeActions.dispatch(setShowAddList(true));
        action = storeActions.getActions();
        expect(action[0].payload).toBe(true);
    });

    it('should change store showAddList in the store data', () => {
        store.dispatch(setShowAddList(true));
        store = store.getState();
        expect(store.showAddList).toBe(true);
    });

    it('should call action change todo list input', () => {
        storeActions.dispatch(changeTodoListInput(listname));
        action = storeActions.getActions();
        expect(action[0].type).toBe('ChangeTodoListInput');
    });

    it('should change action  change todo list store data', () => {
        storeActions.dispatch(changeTodoListInput(listname));
        action = storeActions.getActions();
        expect(action[0].payload).toBe(listname);
    });

    it('should change store todo list listname in the store data', () => {
        store.dispatch(changeTodoListInput(listname));
        store = store.getState();
        expect(store.todoList.listname).toBe(listname);
    });
});
