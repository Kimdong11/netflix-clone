import styles from './linkset.module.css';

const LinkSet = ({ links, hrefs }) => {
    return (
        <nav>
            <ul className={styles.li_container}>
                {links.map((link, index) => {
                    return (
                        <li key={index}>
                            <a>{link}</a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default LinkSet;
