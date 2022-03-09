import { useState } from 'react';
import styles from './loginform.module.css';

const LoginForm = () => {
    const [idValueCheck, setIdValueCheck] = useState(false);
    const [passwordValueCheck, setPasswordValueCheckValueCheck] = useState(false);
    const [clickChkId, setClickChkId] = useState(false);
    const [clickChkPwd, setClickChkPwd] = useState(false);

    const idValueChange = (e) => {
        if (e.target.value != 0) {
            setIdValueCheck(true);
        } else {
            setIdValueCheck(false);
        }
    };

    const passwordValueChange = (e) => {
        if (e.target.value != 0) {
            setPasswordValueCheckValueCheck(true);
        } else {
            setPasswordValueCheckValueCheck(false);
        }
    };

    const buttonClick = (e) => {
        e.preventDefault();
        if (!idValueCheck) {
            setClickChkId(true);
        } else {
            setClickChkId(false);
        }
        if (!passwordValueCheck) {
            setClickChkPwd(true);
        } else {
            setClickChkPwd(false);
        }
    };

    return (
        <div className={styles.login__form_container}>
            <h1>로그인</h1>
            <form className={styles.login__form}>
                <div className={styles.input_container}>
                    <input onChange={idValueChange} className={styles.input} type='email' id='user__id' />
                    {idValueCheck ? (
                        <label className={styles.focus__input} for='user__id'>
                            이메일 주소 또는 전화번호
                        </label>
                    ) : (
                        <label className={styles.label} for='user__id'>
                            이메일 주소 또는 전화번호
                        </label>
                    )}
                    {clickChkId && !idValueCheck ? <div className={styles.id__line}></div> : <div className={styles.hidden}></div>}
                </div>
                {clickChkId && !idValueCheck ? (
                    <>
                        <div className={styles.span__container}>
                            <span className={styles.email__span}>정확한 이메일 주소나 전화번호를 입력하세요.</span>
                        </div>
                    </>
                ) : (
                    <>
                        <div className={styles.hidden}>
                            <span className={styles.email__span}>정확한 이메일 주소나 전화번호를 입력하세요.</span>
                        </div>
                    </>
                )}
                <div className={styles.input_container}>
                    <input className={styles.input} type='password' onChange={passwordValueChange} />
                    {passwordValueCheck ? (
                        <label className={styles.focus__input} for='user__id'>
                            비밀번호
                        </label>
                    ) : (
                        <label className={styles.label} for='user__id'>
                            비밀번호
                        </label>
                    )}
                    {clickChkPwd && !passwordValueCheck ? <div className={styles.id__line}></div> : <div className={styles.hidden}></div>}
                </div>
                {clickChkPwd && !passwordValueCheck ? (
                    <>
                        <div className={styles.pwd_span__container}>
                            <span className={styles.email__span}>비밀번호는 4 - 60자 사이여야 합니다.</span>
                        </div>
                    </>
                ) : (
                    <>
                        <div className={styles.hidden}>
                            <span className={styles.email__span}>비밀번호는 4 - 60자 사이여야 합니다.</span>
                        </div>
                    </>
                )}
                <button className={styles.login__button} type='submit' onClick={buttonClick}>
                    로그인
                </button>
            </form>
            <div className={styles.login__option_container}>
                <label>
                    <input type='checkbox' />
                    <span>로그인 정보 저장</span>
                </label>
                <a>도움이 필요하신가요?</a>
            </div>
        </div>
    );
};

export default LoginForm;
