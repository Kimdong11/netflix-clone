import { useState, useEffect, useRef } from 'react';
import styles from './UnLoggedIn.module.css';
import Line from '../Component/unlogin/Line';
import Blinder from '../Component/unlogin/Blinder';
import WriteImage from '../Component/unlogin/WriteImage';
import ImageVideo from '../Component/unlogin/ImageVideo';
import ImageContents from '../Component/unlogin/ImageContents';
import ImageContents2 from '../Component/unlogin/ImageContents2';
import FooterU from '../Component/unlogin/FooterU';

const UnloggedIn = () => {
    const [language, setLanguage] = useState('Kor');
    const [firstComponent, setFirstComponent] = useState(false);
    const [secondComponent, setSecondComponent] = useState(false);
    const [thirdComponent, setThirdComponent] = useState(false);
    const [fourthComponent, setFourthComponent] = useState(false);
    const [fifthComponent, setFifthComponent] = useState(false);
    const [sixthComponent, setSixthComponent] = useState(false);
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
                                <option value='Kor'>?????????</option>
                                <option value='Eng'>English</option>
                            </select>
                            <button className={styles.login__button}>
                                <a href='/netflix-clone/login'>?????????</a>
                            </button>
                        </div>
                        <WriteImage language={language} />
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
                    <ImageVideo
                        language={language}
                        imageSrc='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png'
                        videoSrc='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v'
                        korSpan1='TV??? ????????????.'
                        korSpan2='????????? TV, PlayStation, Xbox, Chromecast,'
                        korSpan3='Apple TV, ???????????? ???????????? ??? ?????????'
                        korSpan4='?????????????????? ???????????????.'
                        engSpan1='Enjoy on your TV.'
                        engSpan2='Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and'
                        engSpan3='more.'
                    />
                </div>
                <Line />
                <div className={styles.third__container}>
                    <ImageContents
                        language={language}
                        imageSrc1='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg'
                        imageSrc2='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png'
                        korSpan1='?????? ?????? ???????????? ?????????'
                        korSpan2='?????????????????? ???????????????.'
                        korSpan3='???????????? ???????????? ???????????? ???????????????.'
                        aniText1='Stranger Things'
                        aniText2='Downloading...'
                        engSpan1='Download your shows'
                        engSpan2='to watch offline.'
                        engSpan3='Save your favorites easily and always have'
                        engSpan4='something to watch.'
                    />
                </div>
                <Line />
                <div className={styles.second__container}>
                    <ImageVideo
                        language={language}
                        imageSrc='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png'
                        videoSrc='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v'
                        korSpan1='????????? ??????????????????'
                        korSpan11='???????????????.'
                        korSpan2='?????? ????????? ???????????? ????????????, ?????????, ?????????,'
                        korSpan3='TV?????? ??????????????? ?????????????????????. ?????? ?????????'
                        korSpan4='?????? ????????????.'
                        engSpan1='Watch everywhere.'
                        engSpan2='Stream unlimited movies and TV shows on'
                        engSpan3='your phone, tablet, laptop, and TV without.'
                        engSpan4='paying more.'
                    />
                </div>
                <Line />
                <div className={styles.third__container}>
                    <ImageContents2
                        language={language}
                        imageSrc='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/kidsValueProp.png'
                        engSpan1='Create profiles for kids.'
                        engSpan2='Send kids on adventures with their favorite'
                        engSpan3='characters in a space made just for them???'
                        engSpan4='free with your membership.'
                        korSpan1='????????? ?????? ????????????'
                        korSpan11='????????? ?????????.'
                        korSpan2='???????????? ???????????? ???????????? ???????????? ????????? ?????????'
                        korSpan3='??????. ???????????? ??? ????????? ????????? ???????????????. ????????????'
                        korSpan4='??????????????? ???????????????.'
                    />
                </div>
                <Line />
                <div className={styles.fourth__container}>
                    {language == 'Kor' ? (
                        <div className={styles.fourth__container_columns}>
                            <h1>?????? ?????? ??????</h1>
                            <ul>
                                <div
                                    className={styles.li__container}
                                    onClick={() => {
                                        setFirstComponent((prev) => {
                                            return !prev;
                                        });
                                        setSecondComponent((prev) => {
                                            return (prev = false);
                                        });
                                        setThirdComponent((prev) => {
                                            return (prev = false);
                                        });
                                        setFourthComponent((prev) => {
                                            return (prev = false);
                                        });
                                        setFifthComponent((prev) => {
                                            return (prev = false);
                                        });
                                        setSixthComponent((prev) => {
                                            return (prev = false);
                                        });
                                    }}>
                                    <Blinder
                                        div={
                                            <span>
                                                ??????????????? ?????? ?????? ????????? ????????? ?????????, ??????, ???????????????, ???????????????
                                                <br></br>??? ????????? ???????????? ????????? ????????? ????????? ?????? ?????? ?????????????????? ?????????
                                                <br></br>??? ?????? ???????????? ??????????????????.
                                                <br></br>
                                                <br></br>
                                                ????????? ??? ???????????? ????????? ?????? ?????? ????????? ????????? ????????? ?????? ?????? ???<br></br>
                                                ????????????. ??????????????? ???????????? ???????????? ????????? ?????? ????????? ????????????
                                                <br></br>
                                                ????????? ???????????????.
                                            </span>
                                        }
                                        span='??????????????? ????????????????'
                                        active={firstComponent}
                                    />
                                </div>
                                <div
                                    onClick={() => {
                                        setSecondComponent((prev) => {
                                            return !prev;
                                        });
                                        setFirstComponent((prev) => {
                                            return (prev = false);
                                        });
                                        setThirdComponent((prev) => {
                                            return (prev = false);
                                        });
                                        setFourthComponent((prev) => {
                                            return (prev = false);
                                        });
                                        setFifthComponent((prev) => {
                                            return (prev = false);
                                        });
                                        setSixthComponent((prev) => {
                                            return (prev = false);
                                        });
                                    }}
                                    className={styles.li__container}>
                                    <Blinder
                                        div={
                                            <span>
                                                ????????????, ?????????, ????????? TV, ?????????, ???????????? ???????????? ??? ?????????
                                                <br></br>
                                                ?????????????????? ????????? ?????? ????????? ??????????????? ???????????????. ????????? ?????????
                                                <br></br>??? 9,500????????? 17,000????????? ???????????????. ?????? ????????????
                                                <br></br>
                                                ????????? ????????????.
                                            </span>
                                        }
                                        span='???????????? ????????? ????????????????'
                                        active={secondComponent}
                                    />
                                </div>
                                <div
                                    onClick={() => {
                                        setSecondComponent((prev) => {
                                            return (prev = false);
                                        });
                                        setFirstComponent((prev) => {
                                            return (prev = false);
                                        });
                                        setThirdComponent((prev) => {
                                            return !prev;
                                        });
                                        setFourthComponent((prev) => {
                                            return (prev = false);
                                        });
                                        setFifthComponent((prev) => {
                                            return (prev = false);
                                        });
                                        setSixthComponent((prev) => {
                                            return (prev = false);
                                        });
                                    }}
                                    className={styles.li__container}>
                                    <Blinder
                                        div={
                                            <span>
                                                ?????? ???????????? ????????? ??? ????????????. ???????????? ???????????? ??????????????? PC??????
                                                <br></br>
                                                netflix.com??? ?????? ?????? ????????? ??? ?????????, ???????????? ???????????? ??????
                                                <br></br>
                                                ???????????? ?????? ???????????? ????????????(????????? TV, ????????????, ?????????, ????????????
                                                <br></br>
                                                ????????? ????????????, ?????? ?????? ???)????????? ???????????? ????????? ??? ????????????.
                                                <br></br>
                                                <br></br>
                                                iOS, Android, Windows 10??? ???????????? ???????????? ???????????? ????????? ??????
                                                <br></br>
                                                ????????????. ?????? ????????? ????????? ?????? ????????? ???????????? ????????? ??? ??????
                                                <br></br>
                                                ???????????? ???????????????. ??????????????? ???????????? ???????????????.
                                            </span>
                                        }
                                        span='???????????? ????????? ??? ??????????'
                                        active={thirdComponent}
                                    />
                                </div>
                                <div
                                    onClick={() => {
                                        setSecondComponent((prev) => {
                                            return (prev = false);
                                        });
                                        setFirstComponent((prev) => {
                                            return (prev = false);
                                        });
                                        setThirdComponent((prev) => {
                                            return (prev = false);
                                        });
                                        setFourthComponent((prev) => {
                                            return !prev;
                                        });
                                        setFifthComponent((prev) => {
                                            return (prev = false);
                                        });
                                        setSixthComponent((prev) => {
                                            return (prev = false);
                                        });
                                    }}
                                    className={styles.li__container}>
                                    <Blinder
                                        div={
                                            <span>
                                                ??????????????? ?????? ?????? ???????????????. ????????? ?????????, ????????? ???????????????.
                                                <br></br>
                                                ????????? ????????? ??????????????? ?????? ??? ????????? ????????? ??? ????????????.
                                                <br></br>
                                                ?????? ???????????? ????????? ?????? ??? ????????? ????????? ??????????????? ???????????????.
                                            </span>
                                        }
                                        span='???????????? ??????????????? ????????? ??????????'
                                        active={fourthComponent}
                                    />
                                </div>
                                <div
                                    onClick={() => {
                                        setSecondComponent((prev) => {
                                            return (prev = false);
                                        });
                                        setFirstComponent((prev) => {
                                            return (prev = false);
                                        });
                                        setThirdComponent((prev) => {
                                            return (prev = false);
                                        });
                                        setFourthComponent((prev) => {
                                            return (prev = false);
                                        });
                                        setFifthComponent((prev) => {
                                            return !prev;
                                        });
                                        setSixthComponent((prev) => {
                                            return (prev = false);
                                        });
                                    }}
                                    className={styles.li__container}>
                                    <Blinder
                                        div={
                                            <span>
                                                ??????????????? ?????? ??????, ???????????????, ?????????, ???????????????, ?????? ?????? ?????????
                                                <br />
                                                ???????????? ???????????? ??? ????????? ???????????? ???????????? ????????????. ????????? ??????
                                                <br />
                                                ???????????? ????????? ????????? ????????? ?????? ???????????????.
                                            </span>
                                        }
                                        span='?????????????????? ?????? ???????????? ????????? ??? ??????????'
                                        active={fifthComponent}
                                    />
                                </div>
                                <div
                                    onClick={() => {
                                        setSecondComponent((prev) => {
                                            return (prev = false);
                                        });
                                        setFirstComponent((prev) => {
                                            return (prev = false);
                                        });
                                        setThirdComponent((prev) => {
                                            return (prev = false);
                                        });
                                        setFourthComponent((prev) => {
                                            return (prev = false);
                                        });
                                        setFifthComponent((prev) => {
                                            return (prev = false);
                                        });
                                        setSixthComponent((prev) => {
                                            return !prev;
                                        });
                                    }}
                                    className={styles.li__container}>
                                    <Blinder
                                        div={
                                            <span>
                                                ???????????? ???????????? ?????? ????????? ???????????? ?????? ????????? ???????????? ????????????
                                                <br />
                                                ????????? ???????????? ????????? ????????? ?????? ????????? ?????? ????????? ??? ????????????.
                                                <br />
                                                <br />
                                                ?????? ???????????? ????????? PIN ????????? ????????? ?????? ?????? ????????? ??????, ?????????
                                                <br />
                                                ????????? ??? ?????? ???????????? ??????????????? ???????????? ????????? ????????? ?????? ??????
                                                <br />
                                                ?????? ????????? ????????? ?????? ????????????.
                                            </span>
                                        }
                                        span='???????????? ??????????????? ?????? ?????????????'
                                        active={sixthComponent}
                                    />
                                </div>
                            </ul>
                        </div>
                    ) : (
                        <div className={styles.fourth__container_columns}>
                            <h1>Frequently Asked Questions</h1>
                            <ul>
                                <div
                                    className={styles.li__container}
                                    onClick={() => {
                                        setFirstComponent((prev) => {
                                            return !prev;
                                        });
                                        setSecondComponent((prev) => {
                                            return (prev = false);
                                        });
                                        setThirdComponent((prev) => {
                                            return (prev = false);
                                        });
                                        setFourthComponent((prev) => {
                                            return (prev = false);
                                        });
                                        setFifthComponent((prev) => {
                                            return (prev = false);
                                        });
                                        setSixthComponent((prev) => {
                                            return (prev = false);
                                        });
                                    }}>
                                    <Blinder
                                        div={
                                            <span>
                                                Netflix is a streaming service that offers a wide variety of
                                                <br></br>
                                                award-winning TV shows, movies, anime, documentaries, and
                                                <br></br>
                                                more on thousands of internet-connected devices.
                                                <br></br>
                                                <br></br>
                                                You can watch as much as you want, whenever you want
                                                <br></br>
                                                without a single commercial ??? all for one low monthly price.
                                                <br></br>
                                                There's always something new to discover and new TV shows
                                                <br></br>
                                                and movies are added every week!
                                            </span>
                                        }
                                        span='What is Netflix?'
                                        active={firstComponent}
                                    />
                                </div>
                                <div
                                    onClick={() => {
                                        setSecondComponent((prev) => {
                                            return !prev;
                                        });
                                        setFirstComponent((prev) => {
                                            return (prev = false);
                                        });
                                        setThirdComponent((prev) => {
                                            return (prev = false);
                                        });
                                        setFourthComponent((prev) => {
                                            return (prev = false);
                                        });
                                        setFifthComponent((prev) => {
                                            return (prev = false);
                                        });
                                        setSixthComponent((prev) => {
                                            return (prev = false);
                                        });
                                    }}
                                    className={styles.li__container}>
                                    <Blinder
                                        div={
                                            <span>
                                                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                                                <br></br>
                                                streaming device, all for one fixed monthly fee. Plans range
                                                <br></br>
                                                from KRW9,500 to KRW17,000 a month. No extra costs, no
                                                <br></br>
                                                contracts.
                                            </span>
                                        }
                                        span='How much does Netflix cost?'
                                        active={secondComponent}
                                    />
                                </div>
                                <div
                                    onClick={() => {
                                        setSecondComponent((prev) => {
                                            return (prev = false);
                                        });
                                        setFirstComponent((prev) => {
                                            return (prev = false);
                                        });
                                        setThirdComponent((prev) => {
                                            return !prev;
                                        });
                                        setFourthComponent((prev) => {
                                            return (prev = false);
                                        });
                                        setFifthComponent((prev) => {
                                            return (prev = false);
                                        });
                                        setSixthComponent((prev) => {
                                            return (prev = false);
                                        });
                                    }}
                                    className={styles.li__container}>
                                    <Blinder
                                        div={
                                            <span>
                                                Watch anywhere, anytime. Sign in with your Netflix account to
                                                <br></br>
                                                watch instantly on the web at netflix.com from your personal
                                                <br></br>
                                                computer or on any internet-connected device that offers the
                                                <br></br>
                                                Netflix app, including smart TVs, smartphones, tablets,
                                                <br></br>edia players and game consoles.
                                                <br></br>
                                                <br></br>
                                                You can also download your favorite shows with the iOS,
                                                <br></br>
                                                Android, or Windows 10 app. Use downloads to watch while
                                                <br></br>
                                                you're on the go and without an internet connection. Take
                                                <br></br>
                                                Netflix with you anywhere.
                                            </span>
                                        }
                                        span='Where can I watch?'
                                        active={thirdComponent}
                                    />
                                </div>
                                <div
                                    onClick={() => {
                                        setSecondComponent((prev) => {
                                            return (prev = false);
                                        });
                                        setFirstComponent((prev) => {
                                            return (prev = false);
                                        });
                                        setThirdComponent((prev) => {
                                            return (prev = false);
                                        });
                                        setFourthComponent((prev) => {
                                            return !prev;
                                        });
                                        setFifthComponent((prev) => {
                                            return (prev = false);
                                        });
                                        setSixthComponent((prev) => {
                                            return (prev = false);
                                        });
                                    }}
                                    className={styles.li__container}>
                                    <Blinder
                                        div={
                                            <span>
                                                Netflix is flexible. There are no pesky contracts and no
                                                <br></br>
                                                commitments. You can easily cancel your account online in two
                                                <br></br>
                                                clicks. There are no cancellation fees ??? start or stop your
                                                <br></br>
                                                account anytime.
                                            </span>
                                        }
                                        span='How do I cancel?'
                                        active={fourthComponent}
                                    />
                                </div>
                                <div
                                    onClick={() => {
                                        setSecondComponent((prev) => {
                                            return (prev = false);
                                        });
                                        setFirstComponent((prev) => {
                                            return (prev = false);
                                        });
                                        setThirdComponent((prev) => {
                                            return (prev = false);
                                        });
                                        setFourthComponent((prev) => {
                                            return (prev = false);
                                        });
                                        setFifthComponent((prev) => {
                                            return !prev;
                                        });
                                        setSixthComponent((prev) => {
                                            return (prev = false);
                                        });
                                    }}
                                    className={styles.li__container}>
                                    <Blinder
                                        div={
                                            <span>
                                                Netflix has an extensive library of feature films, documentaries,
                                                <br></br>
                                                TV shows, anime, award-winning Netflix originals, and more.
                                                <br></br>
                                                Watch as much as you want, anytime you want.
                                            </span>
                                        }
                                        span='What can I watch on Netflix?'
                                        active={fifthComponent}
                                    />
                                </div>
                                <div
                                    onClick={() => {
                                        setSecondComponent((prev) => {
                                            return (prev = false);
                                        });
                                        setFirstComponent((prev) => {
                                            return (prev = false);
                                        });
                                        setThirdComponent((prev) => {
                                            return (prev = false);
                                        });
                                        setFourthComponent((prev) => {
                                            return (prev = false);
                                        });
                                        setFifthComponent((prev) => {
                                            return (prev = false);
                                        });
                                        setSixthComponent((prev) => {
                                            return !prev;
                                        });
                                    }}
                                    className={styles.li__container}>
                                    <Blinder
                                        div={
                                            <span>
                                                The Netflix Kids experience is included in your membership to
                                                <br></br>
                                                give parents control while kids enjoy family-friendly TV shows
                                                <br></br>
                                                and movies in their own space.
                                                <br></br>
                                                <br></br>
                                                Kids profiles come with PIN-protected parental controls that let
                                                <br></br>
                                                you restrict the maturity rating of content kids can watch and
                                                <br></br>
                                                block specific titles you don???t want kids to see.
                                            </span>
                                        }
                                        span='Is Netflix good for kids?'
                                        active={sixthComponent}
                                    />
                                </div>
                            </ul>
                        </div>
                    )}
                </div>
                <div className={styles.desc__text_container}>
                    <span className={styles.desc__text_3}>
                        ????????? ????????? ????????????? ???????????? ??????????????? ?????????????????? ????????? ????????? ???????????????.
                    </span>
                </div>
                <div className={styles.desc__input_container}>
                    <input className={styles.desc__input} type='text' />
                    <button className={styles.desc__button}>???????????? ></button>
                </div>
                <Line />
                <FooterU />
            </div>
        </div>
    );
};

export default UnloggedIn;
