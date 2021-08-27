import React, { useState, useReducer, useCallback } from 'react';
import globalReducer from './globalReducer';
import authService from '../../services/auth.services';
import { AUTH, FAVORITE, HISTORY } from '../Types';

const GlobalContext = React.createContext(null);

const GlobalProvider = ({ children }) => {
  const [search, setSearch] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const initialState = {
    currentUser: null,
    favoriteVideos: [],
    history: [],
    errorLogin: null,
  };

  const [state, dispatch] = useReducer(globalReducer, initialState);

  const authenticateUser = useCallback(async (email, password) => {
    try {
      const currentUser = await authService().loginApi(email, password);
      console.log(currentUser);
      dispatch({
        type: AUTH.LOGIN_SUCCESSFUL,
        payload: currentUser,
      });
      setIsModalOpen(false);
    } catch (error) {
      console.log(error);
      dispatch({
        type: AUTH.LOGIN_ERROR,
        payload: error,
      });
    }
  }, []);

  const logoutUser = useCallback(() => {
    dispatch({
      type: AUTH.LOGOUT,
    });
  }, []);

  const AddFavoriteVideo = useCallback((video) => {
    dispatch({
      type: FAVORITE.ADD_FAVORITE,
      payload: video,
    });
  }, []);

  const RemoveFavoriteVideo = useCallback((id) => {
    dispatch({
      type: FAVORITE.REMOVE_FAVORITE,
      payload: id,
    });
  }, []);

  const addHistory = useCallback((video) => {
    dispatch({
      type: HISTORY.ADD_HISTORY,
      payload: video,
    });
  }, []);

  const RemoveHistory = useCallback((id) => {
    dispatch({
      type: HISTORY.REMOVE_HISTORY,
      payload: id,
    });
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        search,
        setSearch,
        isModalOpen,
        setIsModalOpen,
        currentUser: state.currentUser,
        favoriteVideos: state.favoriteVideos,
        history: state.history,
        errorLogin: state.errorLogin,
        authenticateUser,
        logoutUser,
        AddFavoriteVideo,
        RemoveFavoriteVideo,
        addHistory,
        RemoveHistory,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider as default };
