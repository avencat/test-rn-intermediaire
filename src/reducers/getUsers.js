// @flow
import Immutable from 'seamless-immutable';
import type { UserType } from '../api';

type ActionType = {
  type: string,
  payload: ?Object,
};

export const GetUsersTypes = {
  GET_USERS_REQUEST: 'GET_USERS_REQUEST',
  GET_USERS_REQUEST_SUCCESS: 'GET_USERS_REQUEST_SUCCESS',
  GET_USERS_REQUEST_FAILURE: 'GET_USERS_REQUEST_FAILURE',
};

const Types = GetUsersTypes;
export const GetUsersCreators = {
  GetUsersRequest: () => ({
    type: Types.GET_USERS_REQUEST,
  }),
  GetUsersRequestSuccess: users => ({
    type: Types.GET_USERS_REQUEST_SUCCESS,
    users,
  }),
  GetUsersRequestFailure: error => ({
    type: Types.GET_USERS_REQUEST_FAILURE,
    error,
  }),
};

export type StateType = {
  error: ?string,
  fetching: boolean,
  success: boolean,
  users: ?Array<UserType>,
};

const initialState = Immutable({
  error: null,
  fetching: false,
  success: false,
  users: null,
});

const GetUsersRequest = () => initialState.merge({ fetching: true });

const GetUsersRequestSuccess = (state, { users }) => initialState.merge({ success: true, users });

const GetUsersRequestFailure = (state, { error }) => initialState.merge({ error });

const typesReducers = {
  [Types.GET_USERS_REQUEST]: GetUsersRequest,
  [Types.GET_USERS_REQUEST_SUCCESS]: GetUsersRequestSuccess,
  [Types.GET_USERS_REQUEST_FAILURE]: GetUsersRequestFailure,
};

export function reducer(state: StateType = initialState, action: ActionType) {
  if (typesReducers[action.type]) {
    return typesReducers[action.type](state, action);
  }
  return state;
}
