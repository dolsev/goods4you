import styled from 'styled-components';

interface ThemedTextProps {
    text: string;
    theme: 'base' | 'inverted';
}

const StyledText = styled.p<{ theme: ThemedTextProps['theme'] }>`
  color: ${(props) => (props.theme === 'inverted' ? 'white' : 'black')};
`;

const ThemedText = ({ text, theme }: ThemedTextProps) => {
    return <StyledText theme={theme}>{text}</StyledText>;
};

export default ThemedText;
