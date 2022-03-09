import styles from './imagevideo.module.css';

const ImageVideo = ({ language }) => {
    return (
        <>
            {language == 'Kor' ? (
                <div className={styles.second__container__text}>
                    <span className={styles.second__container__span_1}>TV로 즐기세요.</span>
                    <span className={styles.second__container__span_2}>스마트 TV, PlayStation, Xbox, Chromecast, </span>
                    <span className={styles.second__container__span_3}>Apple TV, 블루레이 플레이어 등 다양한 </span>
                    <span className={styles.second__container__span_4}>디바이스에서 시청하세요.</span>
                </div>
            ) : (
                <div className={styles.second__container__text}>
                    <span className={styles.second__container__span_1}>Enjoy on your TV.</span>
                    <span className={styles.second__container__span_2}>
                        Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and
                    </span>
                    <span className={styles.second__container__span_3}>more.</span>
                </div>
            )}
            <div>
                <img
                    className={styles.second__container__img}
                    src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png'
                />
                <div className={styles.second__vedio__container}>
                    <video width='400px' autoplay='autoplay' playsinline='playsinline' muted='muted' loop='loop'>
                        <source
                            src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v'
                            type='video/mp4'
                        />
                    </video>
                </div>
            </div>
        </>
    );
};

export default ImageVideo;
