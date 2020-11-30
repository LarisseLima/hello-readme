import React from 'react';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer/Footer';
import PageTitle from '../Components/PageTitle/PageTitle';
import { Link } from 'react-router-dom';
import '../Styles/Pages/tips.css';

export default function Tips() {
    return (
        <div id="tips-page">
            <Sidebar />
            <div class="tips-page-header">
                <PageTitle
                    pageTitle='Dicas'
                />
                <h3>O que é README?</h3>
                <p>README.md é um arquivo com extensão .md (Markdown). Contém informações necessárias para entender o objetivo do projeto. README é uma palavra em inglês que traduzida fica LEIAME.</p>


            </div>
            <Footer />
        </div>
    );
}
