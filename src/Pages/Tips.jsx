import React from 'react';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer/Footer';
import PageTitle from '../Components/PageTitle/PageTitle';
import '../Styles/Pages/tips.css';

export default function Tips() {
    return (
        <div id="tips-page">
            <Sidebar />
            <div class="tips-page-header">
                <PageTitle
                    pageTitle='Dicas'
                />
            </div>
            <Footer />
        </div>
    );
}
