import React from 'react';
import "./ModalWindow.css"
import Store from "../../store/Store";
import CloseIcon from "../../assets/icon-close.png"
import {observer} from "mobx-react-lite";

const ModalWindow = observer(() => {

    const car = Store.currentModal

    return (
        <div className="modal-wrapper">
            <div className="modal-window">
                <form action="">
                    <input
                        type="text"
                        value={car.name}
                        onChange={(e: any) => Store.changeCard(e, car, 'name')}
                    />

                    <input type="text"
                           value={car.model}
                           onChange={(e: any) => Store.changeCard(e, car, 'model')}
                    />
                    <input type="text"
                           value={car.color}
                           onChange={(e: any) => Store.changeCard(e, car, 'color')}
                    />
                    <input
                        type="text"
                        value={car.year}
                        onChange={(e: any) => Store.changeCard(e, car, 'year')}
                    />
                    <input
                        type="text"
                        value={car.price}
                        onChange={(e: any) => Store.changeCard(e, car, 'price')}
                    />
                </form>

                <button className='close-btn' onClick={Store.disableModal}>
                    <img src={CloseIcon} alt="close"/>
                </button>
            </div>
        </div>

    );
});

export default ModalWindow;