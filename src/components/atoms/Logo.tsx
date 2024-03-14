import styles from './atoms.module.css';

const Logo = ({ children }: { children: React.ReactNode }) => {
    return <h1 className={`${styles.logo}`}>{children}</h1>;
};

export default Logo;
