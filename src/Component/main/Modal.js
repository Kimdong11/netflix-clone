import { useState, useRef } from 'react';
import styles from './modal.module.css';

const Modal = ({ src, open }) => {
    return (
        <>
            <div
                className={open ? styles.open__modal : styles.modal}
                style={{ top: `${src.y - src.height}px`, right: `${src.x - src.width * src.index}px` }}>
                <div className={styles.image}>
                    <img src={src.src} />
                </div>
                <div className={styles.contents__box}></div>
            </div>
        </>
    );
};

export default Modal;
