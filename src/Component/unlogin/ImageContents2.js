import styles from './imagecontents2.module.css';

const ImageContents2 = ({
    language,
    imageSrc,
    engSpan1,
    engSpan2,
    engSpan3,
    engSpan4,
    korSpan1,
    korSpan11,
    korSpan2,
    korSpan3,
    korSpan4,
}) => {
    return (
        <>
            {language == 'Kor' ? (
                <>
                    <div className={styles.third__container_item}>
                        <img className={styles.third__container__img} src={imageSrc} />
                    </div>
                    <div className={styles.third__container_animation__right_text}>
                        <span className={styles.third__container_animation__right_large__text1}>{korSpan1}</span>
                        <span className={styles.third__container_animation__right_large__text2}>{korSpan11}</span>
                        <span className={styles.third__container_animation__right_text__kor}>{korSpan2}</span>
                        <span className={styles.third__container_animation__right_text__kor}>{korSpan3}</span>
                        <span className={styles.third__container_animation__right_text__kor}>{korSpan4}</span>
                    </div>
                </>
            ) : (
                <>
                    <div className={styles.third__container_item}>
                        <img className={styles.third__container__img} src={imageSrc} />
                    </div>
                    <div className={styles.third__container_animation__right_text}>
                        <span className={styles.third__container_animation__right_large__text2}>{engSpan1}</span>
                        <span className={styles.third__container_animation__right_text__kor}>{engSpan2}</span>
                        <span className={styles.third__container_animation__right_text__kor}>{engSpan3}</span>
                        <span className={styles.third__container_animation__right_text__kor}>{engSpan4}</span>
                    </div>
                </>
            )}
        </>
    );
};

export default ImageContents2;
