import { StorageKeys } from "./constants";

export const defaultState = {
  categories: ["General"],
  tasks: [],
};

const parsedState = () => {
  try {
    const jsonState = localStorage.getItem(StorageKeys.STATE);
    if (jsonState) return JSON.parse(jsonState);
  } catch (e) {
    console.log(e);
  }

  return null;
};

export const storeState = parsedState() || defaultState;
