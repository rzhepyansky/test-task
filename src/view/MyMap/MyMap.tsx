import React from 'react';
import { YMaps, Map, ZoomControl, Placemark } from '@pbe/react-yandex-maps';
import "./MyMap.css"
import Store from "../../store/Store";
import CloseIcon from "../../assets/icon-close.png"

const MyMap = () => {

    const latitude: number = Store.currentMap.latitude
    const longitude: number = Store.currentMap.longitude

    return (
        <div className="map-wrapper">
            <div className="map-window">
                <YMaps>
                    <Map
                        defaultState={{
                            center: [latitude, longitude],
                            zoom: 9,
                            controls: [],
                        }}
                    >
                        <ZoomControl/>
                        <Placemark geometry={[latitude, longitude]}/>
                    </Map>
                </YMaps>
                <button
                    className="close-btn"
                    onClick={() => Store.disableMap()}
                >
                    <img src={CloseIcon} alt="close"/>
                </button>
            </div>
        </div>


    );
};

export default MyMap;