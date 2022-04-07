import TopBar from '../Component/main/TopBar';
import axios from 'axios';
import { useEffect, useState } from 'react';
import SlideImage from '../Component/SlideImage';
import styles from './mainpage.module.css';
import Video from '../Component/main/Video';
import Modal from '../Component/main/Modal';

const MainPage = () => {
    const [movies, setMovies] = useState([]);
    const movieDatas = async () => {
        const json = await axios.get('https://yts.mx/api/v2/list_movies.json');
        setMovies(json.data.data.movies);
    };
    useEffect(() => {
        movieDatas();
    }, []);
    return (
        <div
            style={{
                positon: 'relative',
                width: '100vw',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
            <TopBar />
            <Video />
            <div className={styles.div__slide__container}>
                <h1>지금 뜨는 콘텐츠</h1>
                <SlideImage images={movies} />
            </div>
            <div className={styles.div__slide__container}>
                <h1>지금 뜨는 콘텐츠</h1>
                <SlideImage images={movies} />
            </div>
            <div className={styles.div__slide__container}>
                <h1>지금 뜨는 콘텐츠</h1>
                <SlideImage images={movies} />
            </div>
            <div className={styles.div__slide__container}>
                <h1>지금 뜨는 콘텐츠</h1>
                <SlideImage images={movies} />
            </div>
            <div className={styles.div__slide__container}>
                <h1>지금 뜨는 콘텐츠</h1>
                <SlideImage images={movies} />
            </div>
        </div>
    );
};

export default MainPage;
