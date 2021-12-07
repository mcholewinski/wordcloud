import styled from 'styled-components';

const WordsContainer = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.black};
  display: flex;
  flex-wrap: wrap;
  margin: 60px 0 80px 0;
`;

WordsContainer.displayName = 'GameWordsContainer';

export default WordsContainer;
