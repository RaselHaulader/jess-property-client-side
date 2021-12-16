import React from 'react';
import { initializeApp } from "firebase/app";
import firebaseConfig from './FirebaseConfig';

const firebaseInit = () => {
  const app = initializeApp(firebaseConfig)
};

export default firebaseInit;