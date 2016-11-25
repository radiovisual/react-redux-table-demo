import * as ActionTypes from './constants';
import fetch from '../api/fetch';

export function requestRows() {
  return {
    type: ActionTypes.FETCH_ROWS_REQUEST,
  };
}

export function receiveRows(rows) {
  return {
    type: ActionTypes.FETCH_ROWS_SUCCESS,
    rows,
    receivedAt: Date.now(),
  };
}

export function fetchRows() {
  return (dispatch) => {
    dispatch(requestRows());

    return fetch()
      .then((rows) => {
        dispatch(receiveRows(rows));
      });
  };
}

export function receiveRowsFailure(error) {
  return {
    type: ActionTypes.FETCH_ROWS_ERROR,
    error,
  };
}

export function changeMaximumRows(maximumRows) {
  return {
    type: ActionTypes.CHANGE_MAXIMUM_ROWS,
    maximumRows,
  };
}

export function toggleSortDirection() {
  return {
    type: ActionTypes.TOGGLE_SORT_DIRECTION,
  };
}

export function sortBy(key) {
  return {
    type: ActionTypes.SORTBY,
    key,
  };
}

export function filterByUsername(username) {
  return {
    type: ActionTypes.FILTER_BY_USERNAME,
    username,
  };
}

export function resetUsernameSearchFilter() {
  return {
    type: ActionTypes.RESET_USERNAME_SEARCH_FILTER,
  };
}

export function updateCurrentPaginationPage(page) {
  return {
    type: ActionTypes.UPDATE_CURRENT_PAGINATION_PAGE,
    page,
  };
}

export function addNewRow(row) {
  return {
    type: ActionTypes.ADD_NEW_ROW,
    row,
  };
}
