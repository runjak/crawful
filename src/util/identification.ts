import { v4 as uuidv4 } from 'uuid';

const localStorageKey = 'crawful-identifier';

export const getIdentifier = (): string => {
  const currentIdentifier = localStorage.getItem(localStorageKey)

  if (currentIdentifier) {
    return currentIdentifier;
  }

  const newIdentifier = uuidv4();
  localStorage.setItem(localStorageKey, newIdentifier);

  return newIdentifier;
}
