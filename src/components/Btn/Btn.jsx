
import React from 'react';
import styles from './Btn.module.scss';



const Btn = ({ children, type }) => {

    const checkBtnType = type => {
        switch (type) {
            case 'head':
                return `${styles.btn} ${styles.btnHead}`

            default:
                return `${styles.btn}`
        }
    };

    return <button className={checkBtnType(type)} >{children}</button>
};


export default Btn;