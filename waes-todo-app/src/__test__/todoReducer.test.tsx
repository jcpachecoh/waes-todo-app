
import { createStore } from 'redux';
import configureStore from 'redux-mock-store';
import { defaultTodos, todoReducer } from '../reducers/todos';
import { changeTodoTaskInput, showAll, showActive, setShowModalTask } from '../actions/index';
import thunk from 'redux-thunk';

describe('Test Client reducer', () => {
    const mockStore = configureStore([thunk]);
    let defaultTodosMock: any, store: any, storeActions: any, task: string, action: any;

    beforeEach(() => {
        store = createStore(todoReducer);
        task = 'clean house';
        defaultTodosMock = {
            task: {
                id: 0,
                task: '',
                done: false,
            },
            pageId: 'cjevh01zwyu0w0148vql4vrck',
            showModalTask: false
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
        expect(action[0].type).toBe('changeTodoTaskInput');
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
        expect(action[0].type).toBe('showAll');
    });

    /////////////////////////
    it('should change action task input', () => {
        storeActions.dispatch(setShowModalTask(true));
        action = storeActions.getActions();
        expect(action[0].type).toBe('ShowModalTask');
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
        expect(action[0].type).toBe('showActive');
    });

    it('should call show completed', () => {
        storeActions.dispatch(showActive());
        action = storeActions.getActions();
        expect(action[0].type).toBe('showActive');
    });

});
