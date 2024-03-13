import styled from 'styled-components';

const Section = styled.section<{ background?: string }>`
  background-color: ${(props) => props.background || '#dadada'};
  padding: 20px;
`;

export default Section;
