import React from 'react';
import './App.css';
import CardsList from "./view/CardsList/CardsList";
import ModalWindow from "./view/ModalWindow/ModalWindow";
import {observer} from "mobx-react-lite";
import Store from "./store/Store";
import SortSelect from "./view/SortSelect/SortSelect";
import MyMap from "./view/MyMap/MyMap";

const App = observer(() => {



    return (
        <div className="App">
            <SortSelect />
            <CardsList />
            {Store.needModal ? <ModalWindow /> : null}
            {Store.needMap ? <MyMap /> : null}
        </div>
    );
})

export default App;
