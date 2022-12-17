import firebase from "./index";

export async function getBathrooms() {
  try {

    const ref = firebase.firestore().collection("bathrooms");
    
    const snapshot = await ref.get();

    const data = snapshot.docs.map((doc) => doc.data());
    return data;

  } catch (error) {
    throw error;
  }
}