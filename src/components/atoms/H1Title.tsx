import ThemedText from "../../styles/ThemedText";

const H1Title = ({ text, theme }: { text: string; theme: 'base' | 'inverted' }) => {
    return <ThemedText text={text} theme={theme} />;
};

export default H1Title;