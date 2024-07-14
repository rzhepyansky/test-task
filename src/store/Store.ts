import {makeAutoObservable} from "mobx";
import {car, Event, Card, StoreClass} from "../model/Model";

class Store implements StoreClass {

    loadedCars: Array<car> = []
    needModal: boolean = false;
    currentModal: any = null;
    currentSort: string = 'default'
    needMap: boolean = false;
    currentMap: any = null


    constructor() {
        makeAutoObservable(this);
    }

    setCurrentMap(obj: car): void {
        this.currentMap = obj;
    }

    enableMap = (): void => {
        this.needMap = true;
    }

    disableMap = (): void => {
        this.needMap = false;
    }

    setLoadedCars(car: car): void {
        this.loadedCars.push(car);
    }

    enableModal = (): void => {
        this.needModal = true;
    }

    disableModal = (): void => {
        this.needModal = false;
    }

    setCurrentModal = (currentModal: car): void => {
        this.currentModal = currentModal;
    }

    removeCard = (card: any): void => {
        this.loadedCars.splice(this.loadedCars.indexOf(card), 1);
    }

    setCurrentSort = (sort: any): void => {
        this.currentSort = sort;
    }

    sortCars = (sorting: string): void => {
        switch (sorting) {
            case "year-asc":
                this.loadedCars.sort((a, b) => a.year - b.year);
                break;
            case "year-desc":
                this.loadedCars.sort((a, b) => b.year - a.year);
                break;
            case "price-asc":
                this.loadedCars.sort((a, b) => a.price - b.price);
                break;
            case "price-desc":
                this.loadedCars.sort((a, b) => b.price - a.price);
                break;
            case "default":
                this.loadedCars.sort((a, b) => a.id - b.id);
        }
    }

    changeCard (e: Event, card: Card, key: string): void {

        for (let item of this.loadedCars) {
            if (item.id === card.id) {
                item[key] = e.currentTarget.value;
            }
        }
    }


}

export default new Store()