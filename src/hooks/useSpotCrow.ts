import { useState, useCallback } from "react";
import { spotCrow } from "../util/firebase";

export const useSpotCrow = (): [boolean, () => void] => {
  const [isSpotting, setSpotting] = useState(false);

  const spot = useCallback(async () => {
    if(isSpotting) {
      return;
    }

    setSpotting(true);
    await spotCrow();
    setSpotting(false);
  }, [isSpotting,setSpotting]);

  return [isSpotting, spot];
};
