import Logo from "../atoms/Logo";
import NavMenu from "../molecules/NavMenu";
import HorizontalLine from "../atoms/HorizontalLine";
import styles from './organisms.module.css';

const Header = () => {
    return (
        <header>
            <div className={styles.headerContent}>
                <Logo>Goods4you</Logo>
                <NavMenu/>
            </div>
            <HorizontalLine/>
        </header>
    );
};

export default Header;
