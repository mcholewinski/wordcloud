import styled from 'styled-components';

interface WordWrapperProps {
  top: string;
  left: string;
  isSelected?: boolean;
}

const WordWrapper = styled.div<WordWrapperProps>`
  position: relative;
  padding: 110px 20px;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  display: flex;
  justify-content: center;

  & > span:nth-child(2) {
    color: ${({ theme, isSelected }) => isSelected && theme.colors.black35};

    &:hover {
      cursor: pointer;
    }
  }
`;

WordWrapper.displayName = 'GameWordWrapper';

export default WordWrapper;
