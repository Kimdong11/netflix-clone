import styles from './writeimage.module.css';

const WriteImage = ({ language }) => {
    return (
        <>
            {language == 'Kor' ? (
                <div className={styles.desc__container_kor}>
                    <div className={styles.desc__text__container}>
                        <span className={styles.desc__text_1}>영화와 시리즈를 무제한으로.</span>
                        <span className={styles.desc__text_2}>다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.</span>
                        <span className={styles.desc__text_3}>
                            시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.
                        </span>
                        <div className={styles.desc__input_container}>
                            <input className={styles.desc__input} type='text' />
                            <button className={styles.desc__button}>시작하기 ></button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={styles.desc__container_eng}>
                    <div className={styles.desc__text__container}>
                        <span className={styles.desc__text_1}>Unlimited movies,</span>
                        <span className={styles.desc__text_1}>TV shows, and more.</span>
                        <span className={styles.desc__text_2}>Watch anywhere. Cancel anytime.</span>
                        <span className={styles.desc__text_3}>Ready to watch? Enter your email to create or restart your membership.</span>
                        <div className={styles.desc__input_container}>
                            <input className={styles.desc__input} type='text' />
                            <button className={styles.desc__button}>Get Start ></button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default WriteImage;
