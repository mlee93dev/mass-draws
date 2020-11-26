import React from 'react';
import Modal from './modal/Modal';
import Header from './header/Header';
import Draws from './draws/Draws';

import './App.scss';

const App = () => (
    <main>
        <Modal />
        <Header />
        <Draws />
    </main>
)

export default App;