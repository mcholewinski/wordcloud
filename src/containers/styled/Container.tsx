import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

Container.displayName = 'AppContainer';

export default Container;
