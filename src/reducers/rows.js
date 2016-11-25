import _ from 'lodash';
import * as ActionTypes from '../actions/constants';

// The initial state of the Table Rows
const initialState = {
  rows: [],
  visibleRows: [],
  currentUser: 'michael',
  maximumRows: 5,
  sortDescending: true,
  currentPage: 1,
};

function rowsReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.FETCH_ROWS_REQUEST: {
      return Object.assign({}, state, {
        isFetching: true,
        error: false,
      });
    }
    case ActionTypes.FETCH_ROWS_SUCCESS: {
      return Object.assign({}, state, {
        isFetching: false,
        error: false,
        rows: action.rows,
        visibleRows: action.rows.slice(0, state.maximumRows),
      });
    }
    case ActionTypes.FETCH_ROWS_FAILURE: {
      return Object.assign({}, state, {
        error: action.error,
        isFetching: false,
      });
    }
    case ActionTypes.CHANGE_MAXIMUM_ROWS: {
      return Object.assign({}, state, {
        maximumRows: action.maximumRows,
        visibleRows: state.rows.slice(0, action.maximumRows),
      });
    }
    case ActionTypes.TOGGLE_SORT_DIRECTION: {
      return Object.assign({}, state, {
        sortDescending: !state.sortDescending,
      });
    }
    case ActionTypes.SORTBY: {
      const sorted = _.sortBy(state.visibleRows, [action.key]);
      return Object.assign({}, state, {
        visibleRows: state.sortDescending ? sorted.reverse() : sorted,
        sortDescending: !state.sortDescending,
      });
    }
    case ActionTypes.FILTER_BY_USERNAME: {
      return Object.assign({}, state, {
        visibleRows: _.filter(state.rows, { username: action.username }),
      });
    }
    case ActionTypes.RESET_USERNAME_SEARCH_FILTER: {
      return Object.assign({}, state, {
        visibleRows: state.rows.slice(0, state.maximumRows),
      });
    }
    case ActionTypes.UPDATE_CURRENT_PAGINATION_PAGE: {
      const start = (Number(action.page) * state.maximumRows) - state.maximumRows;
      const end = start + state.maximumRows;

      return Object.assign({}, state, {
        currentPage: action.page,
        visibleRows: state.rows.slice(start, end),
      });
    }
    case ActionTypes.ADD_NEW_ROW: {
      const newRow = Object.assign({}, action.row, {
        id: state.rows.length + 1,
        createdAt: Date.now(),
      });

      return Object.assign({}, state, {
        rows: [newRow, ...state.rows],
        visibleRows: [newRow, ...state.visibleRows],
      });
    }
    default: {
      return state;
    }
  }
}

export default rowsReducer;

