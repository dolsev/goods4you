import ThemedText from "../../styles/ThemedText";

const Paragraph = ({ text, theme }: { text: string; theme: 'base' | 'inverted' }) => {
    return <ThemedText text={text} theme={theme}/>;
};

export default Paragraph;
