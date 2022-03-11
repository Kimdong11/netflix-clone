import FooterL from '../Component/FooterL';
import LoginForm from '../Component/signin/LoginForm';
import Top from '../Component/signin/Top';
import styles from './loginpage.module.css';

const LoginPage = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.background__img}></div>
                <Top />
                <LoginForm />
            </div>
            <FooterL />
        </>
    );
};

export default LoginPage;
