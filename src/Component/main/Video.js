import styles from './video.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faInfo, faInfoCircle, faPlay, faVolumeHigh, faVolumeMute } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Video = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [bgColor, setBgColor] = useState(true);

    const volumeController = () => {
        setIsClicked((prev) => {
            return !prev;
        });
        setBgColor((prev) => {
            return !prev;
        });
    };
    const onMouseDown = () => {
        setBgColor((prev) => {
            return !prev;
        });
        setBgColor(false);
    };
    return (
        <div className={styles.video__container}>
            <video
                autoPlay
                muted
                loop
                src='https://ak.picdn.net/shutterstock/videos/1059869444/preview/stock-footage-motion-graphic-k-flying-into-digital-technologic-tunnel-d-big-data-digital-tunnel-square-with.webm'
            />
            <div className={styles.desc__container}>
                <div className={styles.desc}>
                    그냥 중국이 메달 모두 가져가라고 하자 그냥 중국이 메달 모두 가져가라고 하자 그냥 중국이 메달 모두 가져가라고 하자 그냥
                    중국이 메달 모두 가져가라고 하자 그냥 중국이 메달 모두 가져가라고 하자 그냥 중국이 메달 모두 가져가라고 하자 그냥 중국이
                    메달 모두 가져가라고 하자 그냥 중국이 메달 모두 가져가라고 하자 그냥 중국이 메달 모두 가져가라고 하자 그냥 중국이 메달
                    모두 가져가라고 하자 그냥 중국이 메달 모두 가져가라고 하자 그냥 중국이 메달 모두 가져가라고 하자 그냥 중국이 메달 모두
                    가져가라고 하자 그냥 중국이 메달 모두 가져가라고 하자 그냥 중국이 메달 모두 가져가라고 하자 그냥 중국이 메달 모두
                    가져가라고 하자 그냥 중국이 메달 모두 가져가라고 하자
                </div>
            </div>
            <div className={styles.play__detail__container}>
                <div className={styles.play__container}>
                    <FontAwesomeIcon icon={faPlay} />
                    <span>재생</span>
                </div>
                <div className={styles.detail__container}>
                    <FontAwesomeIcon icon={faCircleInfo} color='white' />
                    <span>상세 정보</span>
                </div>
            </div>
            <div
                onClick={volumeController}
                onMouseDown={onMouseDown}
                style={bgColor ? { backgroundColor: 'rgba(0, 0, 0, 0)' } : { backgroundColor: 'rgba(255, 255, 255, 0.6)' }}
                className={styles.volume__controller__outer}>
                <div className={styles.volume__controller__inner}>
                    {isClicked ? <FontAwesomeIcon icon={faVolumeHigh} /> : <FontAwesomeIcon icon={faVolumeMute} />}
                    <div className={styles.age__limint__container}>
                        <div className={styles.age__limint__container__line}></div>
                        <div className={styles.age__limint__container__svg}>
                            <span>
                                <svg id='maturity-rating-977' viewBox='0 0 100 100' class={styles.svg__icon}>
                                    <path
                                        className={styles.svg__icon_path__outer}
                                        fill='#CD6D34'
                                        d='M88.727 100H11.27C5.05 100 0 94.952 0 88.727V11.273C0 5.047 5.05 0 11.27 0h77.457C94.952 0 100 5.047 100 11.273v77.454C100 94.952 94.952 100 88.727 100'></path>
                                    <path
                                        className={styles.svg__icon_path__inner}
                                        fill='#FFFFFE'
                                        d='M36.876 15.482v68.651H21.509v-49.51h-5.484l7.097-19.141h13.754zm45.46 0V28.87H57.175v10.063h24.08c.845 0 1.533.687 1.533 1.534v42.13c0 .845-.688 1.532-1.534 1.532H43.616a1.533 1.533 0 01-1.533-1.533V62.202H57v8.988h10.874V52.052h-25.79v-36.57h40.254z'></path>
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Video;
