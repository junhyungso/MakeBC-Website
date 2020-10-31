import React from 'react';
import css from './MainPage.module.css';
import NavBar from '../navbar/navbar';
import Engineering from '../../assets/engineering.jpg';

const MainPage = () => {
    return (
        <div className={css.MainPage}>
            <NavBar />
            <img src={Engineering} alt="Engineering" className={css.MainImage}></img>
            <div className={css.subheading}>
                Creativity • Collaboration • Innovation
            </div>
            <div className={css.row}>
                <div className={css.col1}>
                    Projects
                </div>
                <div className={css.col1}>
                    Events
                </div>
            </div>
        </div>
    );
}


export default MainPage;