import NavLink from "../atoms/NavLink";
import styles from './molecules.module.css';

const NavMenu = () => {
    return (
        <div className={styles.navMenu}>
            <NavLink url={'/'}>Catalog</NavLink>
            <NavLink url={'/'}>About us</NavLink>
            <NavLink url={'/'}>Product selection</NavLink>
            <NavLink url={'/'}>Our Team</NavLink>
            <NavLink url={'/'}>FAQ</NavLink>
            <NavLink url={'/'}>For staff</NavLink>
        </div>
    );
};

export default NavMenu;
