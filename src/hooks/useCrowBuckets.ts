import { useState, useEffect } from "react";
import groupBy from "lodash/groupBy";

import { crowEvents } from "../util/firebase";

const sleep = (ms: number): Promise<void> =>
  new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });

export type CrowBucket = { identifier: string; count: number };
export type CrowBuckets = Array<CrowBucket>;

const crowBuckets = (): CrowBuckets => {
  const groupedCrowEvents = groupBy(crowEvents, ({ identifier }) => identifier);

  return Object.entries(groupedCrowEvents).map(
    ([identifier, entries]): CrowBucket => ({
      identifier,
      count: entries.length,
    })
  );
};

export const useCrowBuckets = (): CrowBuckets => {
  const [buckets, setBuckets] = useState(crowBuckets());

  // @ts-ignore useEffect typechecking being angery at us (:
  useEffect(() => {
    sleep(500).then(() => {
      setBuckets(crowBuckets());
    });
  }, [buckets, setBuckets]);

  return buckets;
};
