// H1Title.tsx
import styles from './atoms.module.css';

interface H1TitleProps {
    children: React.ReactNode;
    theme: 'base' | 'inverted';
}

const H1Title = ({ children, theme }: H1TitleProps) => {
    const themeClass = theme === 'inverted' ? styles.inverted : '';

    return <h1 className={`${styles.h1Title} ${themeClass}`}>{children}</h1>;
};

export default H1Title;
