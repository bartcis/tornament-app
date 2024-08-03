export type FormPlayer = {id:string, value:string}

export type StorageDataDefinition = {name: string,uuid: string, players: FormPlayer[]}

const storageName = 'tournament'

export const setStorageData = (data: StorageDataDefinition) => localStorage.setItem(storageName, JSON.stringify(data));

export const clearStorageData = () => localStorage.clear();

export const getStorageData = () => {
    if(!localStorage) return
    const data = localStorage.getItem(storageName)
    return data ? JSON.parse(data) : null
};
