import { useEffect, useState } from 'react';
import styles from './topbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';

const TopBar = () => {
    const [currentUrl, setCurrentUrl] = useState('');
    const [scrollChk, setScrollchk] = useState(false);
    const [mouseEnter, setMouseEnter] = useState(false);
    const url = window.location.href.split('/')[window.location.href.split('/').length - 1];

    const scrollCheck = () => {
        if (window.scrollY != 0) {
            setScrollchk(true);
        } else {
            setScrollchk(false);
        }
    };

    const onMouseEnter = () => {
        setMouseEnter(true);
    };

    const onMouseLeave = () => {
        setMouseEnter(false);
    };

    useEffect(() => {
        setCurrentUrl(url);
    }, [url]);

    useEffect(() => {
        function scrollListener() {
            window.addEventListener('scroll', scrollCheck);
        } //  window 에서 스크롤을 감시 시작
        scrollListener(); // window 에서 스크롤을 감시
        return () => {
            window.removeEventListener('scroll', scrollCheck);
        }; //  window 에서 스크롤을 감시를 종료
    }, [scrollChk]);

    return (
        <div className={scrollChk ? styles.container__scroll : styles.container}>
            <div className={styles.left__container}>
                <svg className={styles.netflix__text} viewBox='0 0 111 30' focusable='false'>
                    <g>
                        <path d='M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z'></path>
                    </g>
                </svg>
                <nav className={styles.left__nav}>
                    <ul>
                        {currentUrl == 'main' ? (
                            <li className={styles.selected__li}>
                                <a focusable='false' href='main'>
                                    홈
                                </a>
                            </li>
                        ) : (
                            <a>홈</a>
                        )}
                        <li>
                            <a>시리즈</a>
                        </li>
                        <li>
                            <a>영화</a>
                        </li>
                        <li>
                            <a>New! 요즘 대세 콘텐츠</a>
                        </li>
                        <li>
                            <a>내가 찜한 콘텐츠</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={styles.right__container}>
                <nav className={styles.right__nav}>
                    <ul className={styles.right__nav_ul}>
                        <li>
                            <a>
                                <FontAwesomeIcon icon={faSearch} />
                            </a>
                        </li>
                        <li>
                            <a>키즈</a>
                        </li>
                        <li>
                            <a>
                                <FontAwesomeIcon icon={faBell} />
                            </a>
                        </li>
                        <li>
                            <div className={styles.profile__container} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                                <span>
                                    <img src='https://occ-0-4796-988.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41'></img>
                                </span>
                                <span
                                    role='presentation'
                                    className={mouseEnter ? styles.profile__container_span__rotate : styles.profile__container_span}>
                                    <FontAwesomeIcon icon={faCaretDown} />
                                </span>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default TopBar;
