import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { User } from './Models/User';
import { Header } from './Components/Header';
import { ModalConfirm } from './Components/ModalConfirm';
import { Task } from './Models/Task';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders Header without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header setShowModalTask={() => { }} showAll={() => { }} showActive={() => { }} showCompleted={() => { }} logOut={() => { }} setShowAddList={() => { }} user={new User()}/>, div);
});

it('renders Modal Confirm without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ModalConfirm showConfirm={false} setShowModalConfirm={() => {}} task={new Task()} deleteTask={() => {}} />, div);
});