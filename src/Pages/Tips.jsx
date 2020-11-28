import React from 'react';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer/Footer';
import '../Styles/Pages/tips.css';

export default function Tips() {
    return (
        <div id="tips-page">
            <Sidebar />
            <div class="tips-page-header">
                <h1>Dicas</h1>
                <p>O que é...</p>
            </div>
            <Footer />
        </div>
    );
}
