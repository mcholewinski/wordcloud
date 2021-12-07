import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin-bottom: 100px;
  }
  
  & > h2 {
    margin-bottom: 40px;
  }
`;

Container.displayName = 'ResultsContainer';

export default Container;
