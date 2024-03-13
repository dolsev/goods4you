import styles from './atoms.module.css'; // Import CSS Modules

const Section = ({ background, children }: { background?: string; children: React.ReactNode }) => {
    return <section className={styles.section} style={{ backgroundColor: background }}>{children}</section>;
};

export default Section;
