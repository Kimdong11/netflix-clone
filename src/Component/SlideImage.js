import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import styles from './slideimage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const row_variants = {
    hidden: (isBack) => {
        return { x: isBack ? -window.outerWidth + 6 : window.outerWidth - 6 };
    },
    visible: {
        x: 0,
    },
    exit: (isBack) => {
        return { x: isBack ? window.outerWidth - 6 : -window.outerWidth + 6 };
    },
};

const SlideImage = ({ images }) => {
    const [back, setBack] = useState(false);
    const [index, setIndex] = useState(0);

    const offset = 6;
    const total = images.length - 1;
    const maxIndex = Math.floor(total / offset);

    const increase = () => {
        setBack(false);
        setIndex((prev) => {
            return prev === maxIndex ? 0 : prev + 1;
        });
    };

    const decrease = () => {
        setBack(true);
        setIndex((prev) => {
            return prev === 0 ? maxIndex : prev - 1;
        });
    };

    return (
        <>
            <div className={styles.container}>
                <AnimatePresence initial={false} custom={back}>
                    <motion.div
                        key={index}
                        className={styles.grid__container}
                        variants={row_variants}
                        initial='hidden'
                        animate='visible'
                        exit='exit'
                        custom={back}
                        transition={{ x: { type: 'tween', duration: 0.8 } }}>
                        {images.slice(offset * index, offset * index + offset).map((image) => {
                            return (
                                <img
                                    src={image.large_cover_image}
                                    key={image.background_image}
                                    style={{ width: '236px', height: '140px', backgroundColor: 'black', overflow: 'visible' }}
                                />
                            );
                        })}
                    </motion.div>
                </AnimatePresence>
                <div className={styles.button__container}>
                    <button onClick={decrease}>
                        <FontAwesomeIcon icon={faChevronLeft} size='2x' color='white' />
                    </button>
                    <button onClick={increase}>
                        <FontAwesomeIcon icon={faChevronRight} size='2x' color='white' />
                    </button>
                </div>
            </div>
        </>
    );
};

export default SlideImage;
