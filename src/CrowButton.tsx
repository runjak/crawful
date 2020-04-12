import React from 'react';
import { useSpotCrow } from './hooks/useSpotCrow';

const messages = {
  button: 'I spotted a crow!',
  spotting: 'Your crow is currently getting reported.'
}

function CrowButton() {
  const [isSpotting, spotCrow] = useSpotCrow();
  
  return (
    <button disabled={isSpotting} onClick={spotCrow}>
      {isSpotting ? messages.spotting : messages.button}
    </button>
  );
};

export default CrowButton;
