// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from './firebase.auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCdtkwf3E5pPhuc2N_iI8Kjev0WpmDgBBk',
  authDomain: 'instagram-clone-13baa.firebaseapp.com',
  projectId: 'instagram-clone-13baa',
  storageBucket: 'instagram-clone-13baa.appspot.com',
  messagingSenderId: '266037526089',
  appId: '1:266037526089:web:6f6e8f03b64870b5344998'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth()
