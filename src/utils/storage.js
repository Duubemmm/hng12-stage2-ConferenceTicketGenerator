import localforage from "localforage";

export const saveToStorage = async (key, data) => {
  await localforage.setItem(key, data);
};

export const getFromStorage = async (key) => {
  return await localforage.getItem(key);
};
