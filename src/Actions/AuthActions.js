import firebase from '../FirebaseConnection';

export const teste = () => {
  return {
    type: 'SET_UID',
    payload: {
      uid: 'testando',
    },
  };
};
