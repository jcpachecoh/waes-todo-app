import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { User } from './Models/User';
import { Header } from './Components/Header';
import { ModalConfirm } from './Components/ModalConfirm';
import { Task } from './Models/Task';
import { TaskComponent } from './Components/Task';

describe('renders components ', () => {
  it('renders app without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('renders Header without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header setShowModalTask={() => { }} showAll={() => { }} showActive={() => { }} showCompleted={() => { }} logOut={() => { }} setShowAddList={() => { }} user={new User()} />, div);
  });

  it('renders Modal Confirm without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ModalConfirm showConfirm={false} setShowModalConfirm={() => { }} task={new Task()} deleteTask={() => { }} />, div);
  });

  it('renders Task without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TaskComponent task={new Task()} showConfirmModal={false} refresh={() => { }} setShowModalConfirm={() => { }} updateTask={() => { }} setTask={() => { }} />, div);
  });

});