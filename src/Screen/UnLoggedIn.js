import { useState, useEffect, useRef } from 'react';
import styles from './UnLoggedIn.module.css';
import Line from '../Component/Line';
import Blinder from '../Component/Blinder';

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
                                <option value='Kor'>한국어</option>
                                <option value='Eng'>English</option>
                            </select>
                            <button className={styles.login__button}>
                                <a href='/login'>로그인</a>
                            </button>
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
                                    <span className={styles.desc__text_1}>Unlimited movies,</span>
                                    <span className={styles.desc__text_1}>TV shows, and more.</span>
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
                </div>
                <Line />
                {language == 'Kor' ? (
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
                            <span className={styles.third__container_animation__right_text__kor}>
                                간편하게 저장하고 빈틈없이 즐겨보세요.
                            </span>
                        </div>
                    </div>
                ) : (
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
                    </div>
                )}
                <Line />
                <div className={styles.fourth__container}>
                    {language == 'Kor' ? (
                        <div className={styles.fourth__container_columns}>
                            <h1>자주 묻는 질문</h1>
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
                                                넷플릭스는 각종 수상 경력에 빛나는 시리즈, 영화, 애니메이션, 다큐멘터리
                                                <br></br>등 다양한 콘텐츠를 인터넷 연결이 가능한 수천 종의 디바이스에서 시청할
                                                <br></br>수 있는 스트리밍 서비스입니다.
                                                <br></br>
                                                <br></br>
                                                저렴한 월 요금으로 일체의 광고 없이 원하는 시간에 원하는 만큼 즐길 수<br></br>
                                                있습니다. 무궁무진한 콘텐츠가 준비되어 있으며 매주 새로운 시리즈와
                                                <br></br>
                                                영화가 제공됩니다.
                                            </span>
                                        }
                                        span='넷플릭스는 무엇입니까?'
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
                                                스마트폰, 태블릿, 스마트 TV, 노트북, 스트리밍 디바이스 등 다양한
                                                <br></br>
                                                디바이스에서 월정액 요금 하나로 넷플릭스를 시청하세요. 멤버십 요금은
                                                <br></br>월 9,500원부터 17,000원까지 다양합니다. 추가 비용이나
                                                <br></br>
                                                약정이 없습니다.
                                            </span>
                                        }
                                        span='넷플릭스 요금은 얼마인가요?'
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
                                                언제 어디서나 시청할 수 있습니다. 넷플릭스 계정으로 로그인하면 PC에서
                                                <br></br>
                                                netflix.com을 통해 바로 시청할 수 있으며, 인터넷이 연결되어 있고
                                                <br></br>
                                                넷플릭스 앱을 지원하는 디바이스(스마트 TV, 스마트폰, 태블릿, 스트리밍
                                                <br></br>
                                                미디어 플레이어, 게임 콘솔 등)에서도 언제든지 시청할 수 있습니다.
                                                <br></br>
                                                <br></br>
                                                iOS, Android, Windows 10용 앱에서는 좋아하는 시리즈를 저장할 수도
                                                <br></br>
                                                있습니다. 저장 기능을 이용해 이동 중이나 인터넷에 연결할 수 없는
                                                <br></br>
                                                곳에서도 시청하세요. 넷플릭스는 어디서든 함께니까요.
                                            </span>
                                        }
                                        span='어디에서 시청할 수 있나요?'
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
                                                넷플릭스는 부담 없이 간편합니다. 성가신 계약도, 약정도 없으니까요.
                                                <br></br>
                                                멤버십 해지도 온라인에서 클릭 두 번이면 완료할 수 있습니다.
                                                <br></br>
                                                해지 수수료도 없으니 원할 때 언제든 계정을 시작하거나 종료하세요.
                                            </span>
                                        }
                                        span='멤버십을 해지하려면 어떻게 하나요?'
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
                                                넷플릭스는 장편 영화, 다큐멘터리, 시리즈, 애니메이션, 각종 상을 수상한
                                                <br />
                                                넷플릭스 오리지널 등 수많은 콘텐츠를 확보하고 있습니다. 마음에 드는
                                                <br />
                                                콘텐츠를 원하는 시간에 원하는 만큼 시청하세요.
                                            </span>
                                        }
                                        span='넷플릭스에서 어떤 콘텐츠를 시청할 수 있나요?'
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
                                                멤버십에 넷플릭스 키즈 환경이 포함되어 있어 자녀가 자기만의 공간에서
                                                <br />
                                                가족용 시리즈와 영화를 즐기는 동안 부모가 이를 관리할 수 있습니다.
                                                <br />
                                                <br />
                                                키즈 프로필과 더불어 PIN 번호를 이용한 자녀 보호 기능도 있어, 자녀가
                                                <br />
                                                시청할 수 있는 콘텐츠의 관람등급을 제한하고 자녀의 시청을 원치 않는
                                                <br />
                                                특정 작품을 차단할 수도 있습니다.
                                            </span>
                                        }
                                        span='아이들이 넷플릭스를 봐도 좋을까요?'
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
                                                without a single commercial – all for one low monthly price.
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
                                                clicks. There are no cancellation fees – start or stop your
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
                                                block specific titles you don’t want kids to see.
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
                <Line />
            </div>
        </div>
    );
};

export default UnloggedIn;
