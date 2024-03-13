import styles from './atoms.module.css'; // Import CSS Modules

const Paragraph = ({ text, theme }: { text: string; theme: 'base' | 'inverted' }) => {
    return <p className={`${styles.paragraph} ${theme === 'inverted' ? styles.inverted : ''}`}>{text}</p>;
};

export default Paragraph;
