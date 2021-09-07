import { AUTH, FAVORITE, HISTORY } from '../Types';

export default (state, action) => {
  switch (action.type) {
    case AUTH.LOGIN_SUCCESSFUL:
      return {
        ...state,
        currentUser: action.payload,
        errorLogin: null,
      };

    case AUTH.LOGIN_ERROR:
      return {
        ...state,
        errorLogin: action.payload,
      };

    case AUTH.LOGOUT:
      return {
        ...state,
        currentUser: null,
      };

    case FAVORITE.ADD_FAVORITE: {
      const found = state.favoriteVideos.find((video) => video.id === action.payload.id);

      if (found) {
        return state;
      }

      return {
        ...state,
        favoriteVideos: [...state.favoriteVideos, action.payload],
      };
    }

    case FAVORITE.REMOVE_FAVORITE:
      return {
        ...state,
        favoriteVideos: state.favoriteVideos.filter((item) => item.id !== action.payload),
      };

    case HISTORY.ADD_HISTORY: {
      const found = state.history.find((video) => video.id === action.payload.id);

      if (found) {
        return state;
      }

      return {
        ...state,
        history: [...state.history, action.payload],
      };
    }

    case HISTORY.REMOVE_HISTORY:
      return {
        ...state,
        history: state.history.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};
