import { useState, useEffect } from 'react';
import styles from './UnLoggedIn.module.css';
import Line from '../Component/Line';

const UnloggedIn = () => {
    const [language, setLanguage] = useState('Kor');
    const onSelect = (event) => {
        const value = event.target.value;
        setLanguage(value);
    };
    return (
        <div>
            <div>
                <div className={styles.container}>
                    <div className={styles.top__container}>
                        <div className={styles.top_left__container}>
                            <svg className={styles.netflix__text} viewBox='0 0 111 30' focusable='false'>
                                <g>
                                    <path d='M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z'></path>
                                </g>
                            </svg>
                        </div>
                        <div className={styles.top_right__container}>
                            <select className={styles.select__lang} onChange={onSelect}>
                                <option value='Kor'>한국어</option>
                                <option value='Eng'>English</option>
                            </select>
                            <button className={styles.login__button}>로그인</button>
                        </div>

                        {language == 'Kor' ? (
                            <div className={styles.desc__container_kor}>
                                <div className={styles.desc__text__container}>
                                    <span className={styles.desc__text_1}>영화와 시리즈를 무제한으로.</span>
                                    <span className={styles.desc__text_2}>
                                        다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.
                                    </span>
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
                                    <span className={styles.desc__text_1}>Unlimited movies, TV shows, and more.</span>
                                    <span className={styles.desc__text_2}>Watch anywhere. Cancel anytime.</span>
                                    <span className={styles.desc__text_3}>
                                        Ready to watch? Enter your email to create or restart your membership.
                                    </span>
                                    <div className={styles.desc__input_container}>
                                        <input className={styles.desc__input} type='text' />
                                        <button className={styles.desc__button}>Get Start ></button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className={styles.img__container}>
                    {language == 'Kor' ? (
                        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/ed0b5df9-ba9d-4534-bd09-57993daeda56/ad1fd8bb-8268-44ae-bfca-3da8cfc5726f/KR-ko-20220214-popsignuptwoweeks-perspective_alpha_website_large.jpg' />
                    ) : (
                        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/ed0b5df9-ba9d-4534-bd09-57993daeda56/ad1fd8bb-8268-44ae-bfca-3da8cfc5726f/KR-en-20220214-popsignuptwoweeks-perspective_alpha_website_large.jpg' />
                    )}
                    <Line />
                </div>
                <div className={styles.second__container}>
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
                                Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
                            </span>
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
                </div>
                <Line />
                <div className={styles.third__container}>
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
                        <span>간편하게 저장하고 빈틈없이 즐겨보세요.</span>
                    </div>
                </div>
                <Line />
            </div>
        </div>
    );
};
export default UnloggedIn;
