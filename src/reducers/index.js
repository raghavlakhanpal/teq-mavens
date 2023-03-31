const initialState = {
  user: null,
  isLoggedIn: false,
  error: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
        error: null,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        isLoggedIn: false,
        error: null,
      };
    case "LOGIN_ERROR":
      return {
        ...state,
        user: null,
        isLoggedIn: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
