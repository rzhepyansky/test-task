export interface car {
    name: string,
    model: string,
    year: number,
    color: string,
    latitude: number,
    longitude: number,
    price: number,
    id: number,
    [key: string]: any,
}

export interface Card {
    id: number,
    [key: string]: any,
}

export interface Event {
    currentTarget: {
        value: any;
    };
}

export interface StoreClass {
    loadedCars: Array<car>,
    needModal: boolean,
    currentModal: any,
    currentSort: string,
    needMap: boolean,
    currentMap: any,
    setCurrentMap: (obj: car) => void,
    enableMap: () => void,
    disableMap: () => void,
    setCurrentModal: (currentModal: car) => void,
    enableModal: () => void,
    disableModal: () => void,
    setLoadedCars: (car: car) => void,
    removeCard: (card: Card) => void,
    setCurrentSort: (sort: any) => void,
    sortCars: (sorting: string) => void,
    changeCard: (e: Event, card: Card, key: string) => void,
}

export interface ServiceClass {
    _baseURL: string,
    getResources: () => Promise<void>
}
