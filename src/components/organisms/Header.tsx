import Logo from "../atoms/Logo";
import H1Title from "../atoms/H1Title";
import Paragraph from "../atoms/Paragraph";

const Header = () => {
    return (
        <header>
            <Logo text={'Goods4you'}/>
            <H1Title text={'Title'} theme={'base'}/>
            <Paragraph text={'hehe'} theme={'inverted'}/>
        </header>
    );
};

export default Header;
