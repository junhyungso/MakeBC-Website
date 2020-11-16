import React from 'react';
import css from './Logo.module.css';
import makebcLogo from '../../assets/makebc.png';

const logo = () => (
    <div className={css.Logo}>
        <img src={makebcLogo} alt="MakeBC"></img>
    </div> 
);

export default logo;