import {
  GET_USERS_BEGIN,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  GET_SINGLE_USER,
  SORT_BY_HEADER
} from "../actions";

const reducer = (state, action) => {
  if (action.type === GET_USERS_BEGIN) {
    return {
      ...state,
      users_loading: true
    };
  }
  if (action.type === GET_USERS_SUCCESS) {
    return {
      ...state,
      users: action.payload,
      users_loading: false
    };
  }
  if (action.type === GET_USERS_ERROR) {
    return {
      ...state,
      users_loading: false,
      users_error: true
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

  if (action.type === GET_SINGLE_USER) {
    console.log(state.users);
    const tempUsers = [...state.users];
    console.log(state.single_user);
    console.log(action.payload);
    if (tempUsers.length > 0 && action.payload !== state.single_user?.name) {
      console.log(state.users);
      const newUser = tempUsers.find(user => user.name === action.payload);

      return {
        ...state,
        single_user: newUser
      };
    }

    return {
      ...state
    };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default reducer;
