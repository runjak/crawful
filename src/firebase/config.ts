import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBKwElD9ZE2l7nCbxYH_S3xZbITYrXI4hY",
  authDomain: "crawful-fc155.firebaseapp.com",
  databaseURL: "https://crawful-fc155.firebaseio.com",
  projectId: "crawful-fc155",
  storageBucket: "crawful-fc155.appspot.com",
  messagingSenderId: "1091437101456",
  appId: "1:1091437101456:web:35244d27fa7142cbddf315"
}

type App = firebase.app.App;

let app: App | null = null;

export const getApp = (): App => {
  if (!app) {
    app = firebase.initializeApp(config);
  }

  return app;
};

type Database = firebase.database.Database;

let database: Database | null = null;

export const getDatabase = (): Database => {
  if (!database) {
    database = firebase.database(getApp());
  }

  return database;
}
