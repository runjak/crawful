import * as firebase from "firebase";
import memoize from "lodash/memoize";

const config = {
  apiKey: "AIzaSyBKwElD9ZE2l7nCbxYH_S3xZbITYrXI4hY",
  authDomain: "crawful-fc155.firebaseapp.com",
  databaseURL: "https://crawful-fc155.firebaseio.com",
  projectId: "crawful-fc155",
  storageBucket: "crawful-fc155.appspot.com",
  messagingSenderId: "1091437101456",
  appId: "1:1091437101456:web:35244d27fa7142cbddf315",
};

export const getApp = memoize(() => firebase.initializeApp(config));

export const getDatabase = memoize(() => firebase.database(getApp()));

export const getAuth = memoize(() => getApp().auth());
