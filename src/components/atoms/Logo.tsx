import styled from 'styled-components';

const StyledLogo = styled.span<{ fontSize: string }>`
  font-size: 30px;
  font-weight: bold;
  color:white;
`;

const Logo = ({ text }: { text: string }) => {
    return <StyledLogo>{text}</StyledLogo>;
};

export default Logo;
