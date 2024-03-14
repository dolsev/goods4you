import styles from './atoms.module.css';

interface ButtonProps {
    type: 'primary' | 'secondary' | 'ghost' | 'outline';
    onClick?: () => void;
    children: React.ReactNode;
}

const Button = ({ type, onClick, children }: ButtonProps) => {
    const buttonClass = `${styles.button} ${styles[type]}`;

    return (
        <button className={buttonClass} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
