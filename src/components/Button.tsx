import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.blue};
  padding: 10px 42px;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  font-size: 36px;
  border-radius: 8px;
  font-weight: bold;

  &:hover {
    cursor: pointer;
    border: 2px solid ${({theme}) => theme.colors.blue};
    padding: 8px 40px;
    background-color: transparent;
    color: ${({theme}) => theme.colors.blue}
  }
`;

Button.displayName = 'Button';

export default Button;
