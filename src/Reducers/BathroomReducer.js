const initialState = {
  coordinate: {
    latitude: 45.521016,
    longitude: -122.6561917,
  },
  title: 'Fourth Best Place',
  description: 'This is the fourth best place in Portland',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_BATHROOM':
      return {...state, title: action.payload.title};
      break;
  }

  return state;
};
