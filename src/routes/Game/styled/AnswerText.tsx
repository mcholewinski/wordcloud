import styled from 'styled-components';

interface WordsProps {
  wasChecked?: boolean;
  isGoodAnswer?: boolean;
}

const AnswerText = styled.span<WordsProps>`
  color: ${({ theme, isGoodAnswer }) => (isGoodAnswer ? theme.colors.green : theme.colors.red)};
  display: block;
  position: absolute;
  bottom: 145px;
  visibility: ${({ wasChecked }) => (wasChecked ? 'visible' : 'hidden')};
`;

AnswerText.displayName = 'GameAnswerText';

export default AnswerText;
