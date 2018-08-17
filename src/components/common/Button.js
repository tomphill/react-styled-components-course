import styled, {css} from 'styled-components';

const Button = styled.button`
  background: ${props => props.theme.backgroundColor};
  border: 5px solid ${props => props.theme.primaryColor};
  font-size: 20px;
  color: ${props => props.theme.primaryColor}; 
  outline:none !important;
  cursor:pointer;
  
  ${props => props.primary && css`
    background:blue;
  `}
`;

export default Button;