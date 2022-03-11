import FooterL from '../Component/FooterL';
import LoginForm from '../Component/signin/LoginForm';
import Top from '../Component/signin/Top';
import styles from './loginpage.module.css';

const LoginPage = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.background__img}></div>
                <Top /> {/*넷플릭스 텍스트 로고*/}
                <LoginForm /> {/* 로그인 인풋 컴포넌트 */}
            </div>
            <FooterL /> {/* 맨 아래 사이트 Nav */}
        </>
    );
};

export default LoginPage;
