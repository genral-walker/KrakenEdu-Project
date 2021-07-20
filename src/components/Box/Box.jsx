
import React from 'react';
import styles from './Box.module.scss';


const Box = ({ children, type }) => {

    const classesToReturn = type => {
        switch (type) {
            case 'inverse':
                return `${styles.box} ${styles.inverse}`

            case 'overview':
                return `${styles.box} ${styles.overview}`

            case 'roadmap':
                return `${styles.box} ${styles.roadmap}`

            default:
                return `${styles.box}`
        }
    };

    return <div className={classesToReturn(type)}> {children}</div>

};

export default Box;
