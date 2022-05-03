const initialState = {
  userInfo: {},
  fcmToken: '',
  auth: false,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
      case 'SET_USER':
          return { userData: state.userData, userInfo: action.payload  }
          break;
      case 'SET_AUTH':
          return { userData: state.userData, auth: action.payload }
          break;
      default:
          return state;
  }
};

export default userReducer;