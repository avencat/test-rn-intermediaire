// @flow
import { put, takeEvery } from 'redux-saga/effects';
import { GetUsersCreators, GetUsersTypes } from '@reducers/getUsers';
import fetchUsers from '../api';

export function* getUsersTask() {
  try {
    const users = yield fetchUsers();

    yield put(GetUsersCreators.GetUsersRequestSuccess(users));
  } catch (error) {
    yield put(
      GetUsersCreators.GetUsersRequestFailure(
        error.message ? error.message : JSON.stringify(error),
      ),
    );
  }
}

export function* getUsers() {
  yield takeEvery(GetUsersTypes.GET_USERS_REQUEST, getUsersTask);
}
