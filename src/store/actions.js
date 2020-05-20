import { StorageKeys } from "./constants";

export const actions = {
  saveState() {
    localStorage.setItem(StorageKeys.STATE, JSON.stringify(this.state));
  },
};
