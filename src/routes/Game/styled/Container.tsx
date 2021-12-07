import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > h1 {
      text-transform: capitalize;
  }
`;

Container.displayName = 'GameContainer';

export default Container;
