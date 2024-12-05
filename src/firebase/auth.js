import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  updatePassword,
} from "firebase/auth";
import { auth } from "./firebase";

async function doCreateUserWithEmailAndPassword(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

async function doSignInWithEmailAndPassword(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

async function doSignInWithGoogle() {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);

  // Store user email and additional info
  const user = result.user;
  return {
    email: user.email,
    displayName: user.displayName,
    photoUrl: user.photoURL,
  };
}

async function doSignOut() {
  return auth.signOut();
}

async function doPasswordReset(email) {
  return sendPasswordResetEmail(auth, email);
}

async function doPasswordChange(password) {
  return updatePassword(auth.currentUser, password);
}

async function doSendEmailVerification() {
  return sendEmailVerification(auth.currentUser, {
    url: `${window.location.origin}/home`,
  });
}

export {
  doCreateUserWithEmailAndPassword,
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
  doSignOut,
  doPasswordReset,
  doPasswordChange,
  doSendEmailVerification,
};
