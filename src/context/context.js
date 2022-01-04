import React, { useContext, useEffect, useReducer } from "react";
import {
  GET_USERS_BEGIN,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  GET_SINGLE_USER,
  SORT_BY_HEADER
} from "../actions";
import reducer from "../reducer/reducer";
import axios from "axios";
import { constructUsers } from "../utils/helpers";

const getStorageUser = () => {
  let user = localStorage.getItem("user");
  if (user) {
    console.log("here");
    return (user = JSON.parse(localStorage.getItem("user")));
  }
  return null;
};

const API_ENDPOINT = "https://randomuser.me/api/?results=10&seed=abc";

const initialState = {
  users: [],
  users_loading: false,
  users_error: false,
  single_user: getStorageUser(),
  sortBy: "",
  direction: ""
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
    fetchUsers(`${API_ENDPOINT}&page=${value}`);
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

  useEffect(() => {
    fetchUsers(`${API_ENDPOINT}&page=1`);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (state.single_user)
      localStorage.setItem("user", JSON.stringify(state.single_user));
  }, [state.single_user]);

  return (
    <AppContext.Provider
      value={{ ...state, handlePage, sortByHeader, getSingleUser }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
