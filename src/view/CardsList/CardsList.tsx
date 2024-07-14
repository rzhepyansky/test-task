import {useEffect} from 'react';
import Service from "../../service/Service";
import Store from "../../store/Store";
import Card from "../Card/Card";
import {observer} from "mobx-react-lite";
import './CardsList.css'
import {car} from "../../model/Model";

const CardsList = observer(() => {

    useEffect(() => {
        Service.getResources()
    }, []);

    useEffect(() => {
        Store.sortCars(Store.currentSort)
    }, [Store.currentSort]);

    return (
        <div className="cards-list">
            {Store.loadedCars.map((item: car) => (
                <Card key={item.id} car={item} />
            ))}
        </div>
    );
});

export default CardsList;