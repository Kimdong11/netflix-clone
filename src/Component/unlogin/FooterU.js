import styles from './footer.module.css';
import LinkSet from '../LinkSet';

const FooterU = () => {
    return (
        <div className={styles.container}>
            <div className={styles.phone__link_container}>
                <span>질문이 있으신가요? 문의 전화:</span>
                <a>080-001-9587</a>
            </div>
            <div className={styles.link__container}>
                <LinkSet links={['자주 묻는 질문', '고객 센터', '계정', '미디어 센터']} hrefs={[]} />
                <LinkSet links={['투자 정보(IR)', '입사 정보', '넷플릭스 지원 디바이스', '이용 약관']} hrefs={[]} />
                <LinkSet links={['개인정보', '쿠키 설정', '회사 정보', '문의하기']} hrefs={[]} />
                <LinkSet links={['속도 테스트', '법적 고지', '오직 넷플릭스에서']} hrefs={[]} />
            </div>
            <div>
                <select>
                    <option>한국어</option>
                    <option>English</option>
                </select>
            </div>
            <div>
                <p>
                    넷플릭스서비시스코리아 유한회사 통신판매업신고번호: 제2018-서울종로-0426호 전화번호: 080-001-9587<br></br>
                    대표: 레지널드 숀 톰프슨<br></br>
                    이메일 주소: korea@netflix.com<br></br>
                    주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층 우편번호 03161<br></br>
                    사업자등록번호: 165-87-00119<br></br>
                    클라우드 호스팅: Amazon Web Services Inc.<br></br>
                    공정거래위원회 웹사이트<br></br>
                </p>
            </div>
        </div>
    );
};

export default FooterU;
