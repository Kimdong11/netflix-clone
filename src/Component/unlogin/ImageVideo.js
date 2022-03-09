import styles from './imagevideo.module.css';

const ImageVideo = ({
    language,
    imageSrc,
    videoSrc,
    korSpan1,
    korSpan11,
    korSpan2,
    korSpan3,
    korSpan4,
    engSpan1,
    engSpan2,
    engSpan3,
    engSpan4,
}) => {
    return (
        <>
            {language == 'Kor' ? (
                <div className={styles.second__container__text}>
                    <span className={styles.second__container__span_1}>{korSpan1}</span>
                    <span className={styles.second__container__span_1}>{korSpan11}</span>
                    <span className={styles.second__container__span_2}>{korSpan2}</span>
                    <span className={styles.second__container__span_3}>{korSpan3}</span>
                    <span className={styles.second__container__span_4}>{korSpan4}</span>
                </div>
            ) : (
                <div className={styles.second__container__text}>
                    <span className={styles.second__container__span_1}>{engSpan1}</span>
                    <span className={styles.second__container__span_2}>{engSpan2}</span>
                    <span className={styles.second__container__span_3}>{engSpan3}</span>
                    <span className={styles.second__container__span_3}>{engSpan4}</span>
                </div>
            )}
            {korSpan11 == null ? (
                <div>
                    <img className={styles.second__container__img} src={imageSrc} />
                    <div className={styles.second__vedio__container}>
                        <video width='400px' autoplay='autoplay' playsinline='playsinline' muted='muted' loop='loop'>
                            <source src={videoSrc} type='video/mp4' />
                        </video>
                    </div>
                </div>
            ) : (
                <div>
                    <img className={styles.second__container__img} src={imageSrc} />
                    <div className={styles.second__vedio__container} style={{ right: '13%', top: '13%' }}>
                        <video width='344.5px' autoplay='autoplay' playsinline='playsinline' muted='muted' loop='loop'>
                            <source src={videoSrc} type='video/mp4' />
                        </video>
                    </div>
                </div>
            )}
        </>
    );
};

export default ImageVideo;
