import TopBar from '../Component/main/TopBar';
import LoginForm from '../Component/signin/LoginForm';
import axios from 'axios';
import { useEffect, useState } from 'react';
import SlideImage from '../Component/SlideImage';
import './mainpage.module.css';

const MainPage = () => {
    const [movies, setMovies] = useState([]);
    const movieDatas = async () => {
        const json = await axios.get('https://yts.mx/api/v2/list_movies.json');
        setMovies(json.data.data.movies);
    };
    useEffect(() => {
        movieDatas();
    }, []);
    console.log(movies);
    return (
        <div
            style={{
                positon: 'relative',
                width: '100vw',
                height: '200vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
            <TopBar />

            <SlideImage images={movies} />
            <SlideImage images={movies} />
            <SlideImage images={movies} />
            <SlideImage images={movies} />
            <SlideImage images={movies} />
        </div>
    );
};

export default MainPage;
