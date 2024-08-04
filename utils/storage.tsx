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
) => localStorage.setItem(name, JSON.stringify(data));

export const clearStorageData = () => localStorage.clear();

export const getStorageData = (
  name = storageName
): StorageDataDefinition | null => {
  if (!localStorage) return null;
  const data = localStorage.getItem(name);
  return data ? JSON.parse(data) : null;
};
