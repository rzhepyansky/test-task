import Store from "../store/Store";
import {ServiceClass} from "../model/Model";

class Service implements ServiceClass {
    _baseURL: string = 'https://test.tspb.su/test-task/vehicles'

    getResources = async (): Promise<void> => {
        await fetch(this._baseURL)
            .then(res => res.json())
            .then(json => json.forEach((item: any) => Store.setLoadedCars(item)))

    }
}

export default new Service();