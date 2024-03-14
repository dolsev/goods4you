import Header from '../organisms/Header';
import Section from '../atoms/Section';
import H1Title from "../atoms/H1Title";
import Paragraph from "../atoms/Paragraph";
import Button from "../atoms/Button";

const MainPageTemplate = () => {
    return (
        <>
            <Section background="#484283">
                <Header />
                <H1Title theme={"inverted"}>Any products from famous brands with worldwide delivery</H1Title>
                <Paragraph theme={'inverted'}>We sell smartphones, laptops, clothes, shoes and many other products at low prices</Paragraph>
                <Button type={"primary"}>Go to shopping</Button>
            </Section>
            <Section>
            </Section>
            <Section background="#484283">
            </Section>
        </>
    );
};

export default MainPageTemplate;
