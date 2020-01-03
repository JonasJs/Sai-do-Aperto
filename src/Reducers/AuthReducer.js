const initialState = {
  nickName: '',
  uid: 'jonas',
  status: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NICKNAME':
      return {...state, nickName: action.payload.nickName};
      break;
  }

  return state;
};
