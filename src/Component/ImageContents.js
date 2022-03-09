import styles from './imagecontents.module.css';

const ImageContents = ({ language }) => {
    return (
        <>
            {language == 'Kor' ? (
                <>
                    <div className={styles.third__container_item}>
                        <img
                            className={styles.third__container__img}
                            src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg'
                        />
                        <div className={styles.third__container_animation}>
                            <div className={styles.third__container_left}>
                                <img
                                    className={styles.third__container_animation__img}
                                    src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png'
                                />
                                <div className={styles.third__container_animation__text}>
                                    <span className={styles.third__container_animation__text_1}>기묘한 이야기</span>
                                    <span className={styles.third__container_animation__text_2}>저장중...</span>
                                </div>
                            </div>
                            <div className={styles.third__container_animation__div}></div>
                        </div>
                    </div>
                    <div className={styles.third__container_animation__right_text}>
                        <span>즐겨 보는 콘텐츠를 저장해</span>
                        <span>오프라인으로 시청하세요.</span>
                        <span className={styles.third__container_animation__right_text__kor}>간편하게 저장하고 빈틈없이 즐겨보세요.</span>
                    </div>
                </>
            ) : (
                <>
                    <div className={styles.third__container_item}>
                        <img
                            className={styles.third__container__img}
                            src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg'
                        />
                        <div className={styles.third__container_animation}>
                            <div className={styles.third__container_left}>
                                <img
                                    className={styles.third__container_animation__img}
                                    src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png'
                                />
                                <div className={styles.third__container_animation__text}>
                                    <span className={styles.third__container_animation__text_1}>Stranger Things</span>
                                    <span className={styles.third__container_animation__text_2}>Downloading...</span>
                                </div>
                            </div>
                            <div className={styles.third__container_animation__div}></div>
                        </div>
                    </div>
                    <div className={styles.third__container_animation__right_text}>
                        <span>Download your shows</span>
                        <span>to watch offline.</span>
                        <span className={styles.third__container_animation__right_text__eng}>
                            Save your favorites easily and always have
                        </span>
                        <span className={styles.third__container_animation__right_text__eng_1}>something to watch.</span>
                    </div>
                </>
            )}
        </>
    );
};

export default ImageContents;
