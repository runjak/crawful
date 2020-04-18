import { useState, useEffect } from "react";
import { getAuth } from "./config";

type User = firebase.User;

export const useCurrentUser = (): User | null => {
  const [user, setUser] = useState<User | null>(getAuth().currentUser);

  useEffect(() => {
    const unsubscribe = getAuth().onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return unsubscribe;
  }, [setUser]);

  return user;
};

export const setDisplayName = async (displayName: string) => {
  const auth = getAuth();

  if (auth.currentUser) {
    auth.currentUser.updateProfile({ displayName });
  } else {
    const credentials = await auth.signInAnonymously();
    const user = credentials.user;

    if (!user) {
      throw new Error("Failed to sign in new anonymous user.");
    }

    user.updateProfile({ displayName });
    await credentials.user?.updateProfile({ displayName });
  }
};
