import styles from './Blinder.module.css';

const Blinder = ({ div, span, active }) => {
    return (
        <>
            <li className={styles.item}>
                <span>{span}</span>
                <svg
                    id='thin-x'
                    viewBox='0 0 26 26'
                    className={active ? styles.svg__animation : styles.svg__non_animation}
                    focusable='true'>
                    <path d='M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z'></path>
                </svg>
            </li>
            <div className={active ? styles.div__animation : styles.div__non_animation}>{div}</div>
        </>
    );
};

export default Blinder;
