import styled from 'styled-components';

const PasswordInput = styled.input.attrs({
    type: props => props.show ? 'text' : 'password'
})`
  border-radius:3px;
  outline:none;
  border: 1px solid black;
  &:focus{
    border-color: blue;
  }
`;

export default PasswordInput;