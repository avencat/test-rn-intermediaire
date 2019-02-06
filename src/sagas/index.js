import { fork } from 'redux-saga/effects';
import { getUsers } from '@sagas/getUsers';

export default function* root() {
  yield fork(getUsers);
}
