import styled from 'styled-components';

const Input = styled.input.attrs({ type: 'text' })`
  width: 300px;
  padding: 8px 0;
  text-align: center;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.black};
  transition: width 1s;
  font-size: 20px;

  &:focus {
    width: 500px;
  }
`;

Input.displayName = 'InputControlInput';

export default Input;
