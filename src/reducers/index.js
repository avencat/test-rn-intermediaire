// @flow
import { combineReducers } from 'redux';
import { reducer as GetUsers } from '@reducers/getUsers';
import type { StateType as GetUsersStateType } from '@reducers/getUsers';

export type AppState = {
  GetUsers: GetUsersStateType,
};

const state: AppState = combineReducers({
  GetUsers,
});

export default state;
