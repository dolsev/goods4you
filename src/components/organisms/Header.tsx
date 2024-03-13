import Logo from "../atoms/Logo";
import H1Title from "../atoms/H1Title";
import Paragraph from "../atoms/Paragraph";

const Header = () => {
    return (
        <header>
            <Logo text={'Goods4you'}/>
            <H1Title theme={'base'}>Title</H1Title>
            <Paragraph text={'hehe'} theme={'inverted'}/>
        </header>
    );
};

export default Header;
