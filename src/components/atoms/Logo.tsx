import styles from './atoms.module.css';

const Logo = ({ text }: { text: string }) => {
    return <span className={styles.logo}>{text}</span>;
};

export default Logo;
