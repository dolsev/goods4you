// H1Title.tsx
import styles from './atoms.module.css'; // Import CSS Modules

const H1Title = ({ children, theme }: { children: React.ReactNode; theme: 'base' | 'inverted' }) => {
    return <h1 className={`${styles.h1Title} ${theme === 'inverted' ? styles.inverted : ''}`}>{children}</h1>;
};

export default H1Title;
