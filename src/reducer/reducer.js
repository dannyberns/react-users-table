import {
  GET_USERS_BEGIN,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  GET_SINGLE_USER,
  DELETE_SINGLE_USER,
  SORT_BY_HEADER,
  UPDATE_PAGE
} from "../actions";

const reducer = (state, action) => {
  if (action.type === GET_USERS_BEGIN) {
    return {
      ...state,
      users_loading: true,
      users_error: false
    };
  }
  if (action.type === GET_USERS_SUCCESS) {
    return {
      ...state,
      users: action.payload,
      users_loading: false,
      users_error: false
    };
  }
  if (action.type === GET_USERS_ERROR) {
    return {
      ...state,
      users_loading: false,
      users_error: true
    };
  }

  if (action.type === GET_SINGLE_USER) {
    const { users } = state;
    if (users.length > 0) {
      const tempUser = users.find(
        user => user.name.toLowerCase() === action.payload.toLowerCase()
      );
      if (tempUser)
        return {
          ...state,
          single_user: tempUser,
          single_user_error: false,
          single_user_loading: false
        };
      else {
        return {
          ...state,
          single_user_error: true,
          single_user_loading: false
        };
      }
    }
    return {
      ...state,
      single_user_error: false,
      single_user_loading: true
    };
  }

  if (action.type === DELETE_SINGLE_USER) {
    return {
      ...state,
      single_user: null
    };
  }

  if (action.type === UPDATE_PAGE) {
    return {
      ...state,
      page: action.payload
    };
  }

  if (action.type === SORT_BY_HEADER) {
    const { newHeader: header, direction } = action.payload;
    const tempUsers = [...state.users];

    if (header === "age") {
      tempUsers.sort((a, b) => {
        if (direction === "asc") return a[header] - b[header];
        else return b[header] - a[header];
      });
    } else {
      tempUsers.sort((a, b) => {
        if (direction === "asc") return a[header].localeCompare(b[header]);
        else return b[header].localeCompare(a[header]);
      });
    }

    return {
      ...state,
      users: tempUsers,
      sortBy: header,
      direction
    };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default reducer;
