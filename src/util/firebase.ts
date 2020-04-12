import * as firebase from 'firebase';

import { getIdentifier } from './identification';

const config = {
  apiKey: "AIzaSyBKwElD9ZE2l7nCbxYH_S3xZbITYrXI4hY",
  authDomain: "crawful-fc155.firebaseapp.com",
  databaseURL: "https://crawful-fc155.firebaseio.com",
  projectId: "crawful-fc155",
  storageBucket: "crawful-fc155.appspot.com",
  messagingSenderId: "1091437101456",
  appId: "1:1091437101456:web:35244d27fa7142cbddf315"
}

export const app = firebase.initializeApp(config);

export const crows = firebase.database().ref('crows');

export type CrowEvent = {
  content: string;
  timestamp: number;
  identifier: string;
};

const mkCrowEvent = (identifier: string): CrowEvent => ({
  content: 'spotted a crow',
  timestamp: Date.now(),
  identifier
});

export const spotCrow = async (): Promise<void> => {
  const identifier = getIdentifier();

  await crows.push(mkCrowEvent(identifier));
};

export let crowEvents: Array<CrowEvent> = [];

export type CrowEventListener = (crowEvent: CrowEvent) => void;

crows.on('value', (dataSnapshot): void => {
  const things = dataSnapshot.val();
  console.log({crowEvent: things})
  crowEvents = Object.values(things);
});
