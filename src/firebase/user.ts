import firebase from "./index";

interface ICreateUser {
  email: string;
  password: string;
  data: {
    name: string;
    email: string;
    phone: string;
  }
}

interface ISignIn {
  email: string;
  password: string;
}

interface IUserSignIn {
  user: {
    uid: string;
  }
}


export async function getUser(uid: string) {
  try {
    const ref = firebase.firestore().collection("users").doc(uid);

    const response = await ref.get();

    const data = response.data();

    return data;

  } catch (error) {
    console.log(error);
    throw new Error("Ops!, Ocorreu um error.");
  }
}

export async function signOut() {
  try {
    await firebase.auth().signOut();
    
  } catch (error) {
    throw new Error("Ops!, Ocorreu um error.");
  }
}

export async function signIn({email, password}: ISignIn) {
  try {
    const { user } = await firebase.auth()
      .signInWithEmailAndPassword(email, password) as IUserSignIn;
      
    return user.uid
    
  } catch (error: any) {
    if(error?.code === "auth/user-not-found") {
      throw new Error("Usuário não encontrado!");
    }

    if(error?.code === "auth/wrong-password") {
      throw new Error("E-mail e/ou senha inválida!");
    }
    
    throw new Error("Ops!, Ocorreu um error.");
  }

}

export async function isLoggedUser() {
  try {
    const user = await firebase.auth().currentUser;
    
    if (user?.uid) {
      return user.uid;
    }

    return false;
  } catch (error) {
    throw new Error("Erro ao buscar as informações.")
  }
}

export async function createUser({email, password, data}: ICreateUser) {
  try {
    const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);
    
    const ref = firebase.firestore().collection("users").doc(user?.uid);

    await ref.set({
      ...data,
      uid: user?.uid,
    });

    const response = await ref.get()
    const dataCollection = response.data();

    return dataCollection;

  } catch (error: any) {
    console.log(error);
    if(error.code === "auth/email-already-in-use") {
      throw new Error("Usuário já cadastrado encontrado!");
    }

    if(error.code === "auth/weak-password") {
      throw new Error("Digite uma senha mais forte/segura!");
    }
    
    throw new Error("Ops!, Ocorreu um error.");
  }
}