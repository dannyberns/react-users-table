import React, { useContext, useEffect, useReducer } from "react";
import {
  GET_USERS_BEGIN,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  GET_SINGLE_USER,
  GET_STORED_USER,
  SORT_BY_HEADER,
  UPDATE_PAGE
} from "../actions";
import reducer from "../reducer/reducer";
import axios from "axios";
import { constructUsers } from "../utils/helpers";

const getStoragePage = () => {
  let user = localStorage.getItem("page");
  if (user) {
    return Number(user);
  }
  return 1;
};

const API_ENDPOINT = "https://randomuser.me/api/?results=10&seed=abc";

const initialState = {
  users: [],
  users_loading: false,
  users_error: false,
  single_user: null,
  single_user_error: false,
  single_user_loading: false,
  sortBy: "",
  direction: "",
  page: getStoragePage()
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchUsers = async url => {
    dispatch({ type: GET_USERS_BEGIN });
    try {
      const response = await axios.get(url);
      const users = response.data.results;
      const newUsers = constructUsers(users);
      dispatch({ type: GET_USERS_SUCCESS, payload: newUsers });
      if (state.sortBy && state.direction)
        sortByHeader(state.sortBy, state.direction);
    } catch (error) {
      dispatch({ type: GET_USERS_ERROR });
    }
  };

  const handlePage = value => {
    dispatch({ type: UPDATE_PAGE, payload: value });
  };

  const sortByHeader = (header, direction) => {
    let newHeader = header.toLowerCase();

    if (newHeader === "full name") newHeader = "name";
    dispatch({
      type: SORT_BY_HEADER,
      payload: { newHeader, direction }
    });
  };

  const getSingleUser = name => {
    dispatch({ type: GET_SINGLE_USER, payload: name });
  };

  const getStoredUser = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    dispatch({ type: GET_STORED_USER, payload: user });
  };

  useEffect(() => {
    fetchUsers(`${API_ENDPOINT}&page=${state.page}`);
    // eslint-disable-next-line
  }, [state.page]);

  useEffect(() => {
    localStorage.setItem("page", state.page);
  }, [state.page]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        handlePage,
        sortByHeader,
        getSingleUser,
        getStoredUser
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
