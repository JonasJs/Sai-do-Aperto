import firebase from '../FirebaseConnection';

export const createBathroom = () => {
  return {
    type: 'SET_UID',
    payload: {
      uid: 'testando',
    },
  };
};
