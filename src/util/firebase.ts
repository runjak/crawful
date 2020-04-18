import { getDatabase } from "../firebase/config";
import { getIdentifier } from "./identification";

export const crows = getDatabase().ref("crows");

export type CrowEvent = {
  content: string;
  timestamp: number;
  identifier: string;
};

const mkCrowEvent = (identifier: string): CrowEvent => ({
  content: "spotted a crow",
  timestamp: Date.now(),
  identifier,
});

export const spotCrow = async (): Promise<void> => {
  const identifier = getIdentifier();

  await crows.push(mkCrowEvent(identifier));
};

export let crowEvents: Array<CrowEvent> = [];

export type CrowEventListener = (crowEvent: CrowEvent) => void;

crows.on("value", (dataSnapshot): void => {
  const things = dataSnapshot.val();
  console.log({ crowEvent: things });
  crowEvents = Object.values(things);
});
