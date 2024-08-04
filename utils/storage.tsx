export type FormPlayer = { id: string; value: string };

export type StorageDataDefinition = {
  name: string;
  uuid: string;
  players: FormPlayer[];
};

const storageName = "tournament";

export const setStorageData = (
  data: StorageDataDefinition,
  name = storageName
) => {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(name, JSON.stringify(data));
  }
};

export const clearStorageData = () => {
  if (typeof window !== "undefined") {
    window.localStorage.clear();
  }
};

export const getStorageData = (
  name = storageName
): StorageDataDefinition | null => {
  if (typeof window !== "undefined") {
    const data = window.localStorage.getItem(name);
    return data ? JSON.parse(data) : null;
  }
  return null;
};
