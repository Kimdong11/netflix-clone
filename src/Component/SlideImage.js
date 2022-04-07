import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import styles from './slideimage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Modal from './main/Modal';

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
    const height = window.innerHeight;
    const width = window.innerWidth;
    let imageRef = useRef();
    const [back, setBack] = useState(false);
    const [index, setIndex] = useState(0);
    const [isMouseEnter, setIsMouseEnter] = useState(false);
    const [src, setSrc] = useState({});

    const offset = 6;
    const total = images.length - 1;
    const maxIndex = Math.floor(total / offset);

    const increase = () => {
        setBack(false);
        setIndex((prev) => {
            return prev === maxIndex ? 0 : prev + 1;
        });
    };

    const makeModal = (e) => {
        const index = e._targetInst.return.key;
        let ref = imageRef;
        console.log(ref);
        setSrc({ src: e.target.currentSrc, index, width: ref.width, y: ref.y, x: ref.x, height: ref.height });
        setIsMouseEnter((prev) => {
            return !prev;
        });
    };

    const deleteModal = () => {
        setIsMouseEnter((prev) => {
            return !prev;
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
                        {images.slice(offset * index, offset * index + offset).map((image, index) => {
                            return (
                                <div
                                    key={index}
                                    ref={(el) => {
                                        if (!el) return;
                                        imageRef = el.getBoundingClientRect();
                                    }}
                                    onMouseEnter={makeModal}
                                    onMouseLeave={deleteModal}
                                    className={styles.image__box}>
                                    <img className={styles.image} src={image.large_cover_image} />
                                </div>
                            );
                        })}
                        {isMouseEnter ? <Modal src={src} open={isMouseEnter} /> : null}
                    </motion.div>
                </AnimatePresence>
                <button onClick={decrease} className={styles.backward__button}>
                    <FontAwesomeIcon icon={faChevronLeft} size='2x' color='white' />
                </button>
                <button onClick={increase} className={styles.forward__button}>
                    <FontAwesomeIcon icon={faChevronRight} size='2x' color='white' />
                </button>
            </div>
        </>
    );
};

export default SlideImage;
