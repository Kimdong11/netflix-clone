import styles from './imagecontents.module.css';

const ImageContents = ({
    language,
    imageSrc1,
    imageSrc2,
    korSpan1,
    korSpan2,
    korSpan3,
    engSpan1,
    engSpan2,
    engSpan3,
    engSpan4,
    aniText1,
    aniText2,
}) => {
    return (
        <>
            {language == 'Kor' ? (
                <>
                    <div className={styles.third__container_item}>
                        <img className={styles.third__container__img} src={imageSrc1} />
                        <div className={styles.third__container_animation}>
                            <div className={styles.third__container_left}>
                                <img className={styles.third__container_animation__img} src={imageSrc2} />
                                <div className={styles.third__container_animation__text}>
                                    <span className={styles.third__container_animation__text_1}>기묘한 이야기</span>
                                    <span className={styles.third__container_animation__text_2}>저장중...</span>
                                </div>
                            </div>
                            <div className={styles.third__container_animation__div}></div>
                        </div>
                    </div>
                    <div className={styles.third__container_animation__right_text}>
                        <span>{korSpan1}</span>
                        <span>{korSpan2}</span>
                        <span className={styles.third__container_animation__right_text__kor}>{korSpan3}</span>
                    </div>
                </>
            ) : (
                <>
                    <div className={styles.third__container_item}>
                        <img className={styles.third__container__img} src={imageSrc1} />
                        <div className={styles.third__container_animation}>
                            <div className={styles.third__container_left}>
                                <img className={styles.third__container_animation__img} src={imageSrc2} />
                                <div className={styles.third__container_animation__text}>
                                    <span className={styles.third__container_animation__text_1}>{aniText1}</span>
                                    <span className={styles.third__container_animation__text_2}>{aniText2}</span>
                                </div>
                            </div>
                            <div className={styles.third__container_animation__div}></div>
                        </div>
                    </div>
                    <div className={styles.third__container_animation__right_text}>
                        <span>{engSpan1}</span>
                        <span>{engSpan2}</span>
                        <span className={styles.third__container_animation__right_text__eng}>{engSpan3}</span>
                        <span className={styles.third__container_animation__right_text__eng_1}>{engSpan4}</span>
                    </div>
                </>
            )}
        </>
    );
};

export default ImageContents;
