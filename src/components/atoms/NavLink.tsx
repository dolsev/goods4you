import styles from './atoms.module.css';

interface NavLinkProps {
    children: React.ReactNode;
    url: string;
}

const NavLink = ({ children, url }: NavLinkProps) => {
    return <a href={url} className={styles.navLink}>{children}</a>;
};

export default NavLink;
