// Paragraph.tsx
import styles from './atoms.module.css';

interface ParagraphProps {
    children: React.ReactNode;
    theme: 'base' | 'inverted';
}

const Paragraph = ({ children, theme }: ParagraphProps) => {
    const themeClass = theme === 'inverted' ? styles.inverted : '';

    return <p className={`${styles.paragraph} ${themeClass}`}>{children}</p>;
};

export default Paragraph;
