import styled from 'styled-components';

export const StyledWbnPlayer = styled.div`
  background: ${(props) => props.theme.bgcolor};
  border: ${(props) => props.theme.border};
  max-width: 1800px;
  margin: 0 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  flex-direction: row;
  max-height: 863px;
  transition: all 0.5s ease;

  @media screen and (max-width: 1400px) {
    display: block;
    max-height: 10000px;
  }
`;
