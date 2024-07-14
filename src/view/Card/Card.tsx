import React from 'react';
import './Card.css'
import Store from "../../store/Store";
import {observer} from "mobx-react-lite";
import deleteIcon from "../../assets/icon-delete.png"
import iconEdit from "../../assets/icon-edit.png"
import PinIcon from "../../assets/icon-map-pin.png"
import {car} from "../../model/Model";

type CardProps = {
    car: car
}

const Card = observer(({car}: CardProps) => {

    return (
        <div className="card">
            <div className="card__options">
                <h2>{car.name}</h2>
                <p>{car.model}</p>
                <p>Color: {car.color}</p>
                <p>Year: {car.year}</p>
                <p>${car.price}</p>
            </div>
            <div className="card__btns">
                <button
                    className='delete-btn'
                    onClick={(e) => {
                        e.stopPropagation()
                        Store.removeCard(car)
                    }}
                >
                    <img src={deleteIcon} alt="delete"/>
                </button>
                <button
                    className='edit-btn'
                    onClick={() => {
                        Store.setCurrentModal(car)
                        Store.enableModal()
                    }}
                >
                    <img src={iconEdit} alt="edit"/>
                </button>
                <button
                    className='map-btn'
                    onClick={() => {
                        Store.setCurrentMap(car)
                        Store.enableMap()
                    }}
                >
                    <img src={PinIcon} alt="map"/>
                </button>
            </div>

        </div>
    );
});

export default Card;