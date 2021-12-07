import React, { useEffect } from 'react';

import { Button, H1, Text } from '../../components';

import AnswerText from './styled/AnswerText';
import Container from './styled/Container';
import WordWrapper from './styled/WordWrapper';
import WordsContainer from './styled/WordsContainer';

import { useWordcloud } from '../../hooks/useWordcloud';

export default function Game() {
  const {
    gameData,
    areAnswersChecked,
    handleCheckAnswers,
    handleWordClick,
    wordsPositions,
    selectedWords,
  } = useWordcloud(2);

  return (
    <Container>
      <H1>{gameData.question}:</H1>
      <WordsContainer>
        {gameData.all_words.map((word, index) => (
          <WordWrapper
            top={wordsPositions[index]?.top}
            left={wordsPositions[index]?.left}
            key={index}
            isSelected={selectedWords.includes(word)}
          >
            <AnswerText
              wasChecked={selectedWords.includes(word) && areAnswersChecked}
              isGoodAnswer={gameData.good_words.includes(word)}
            >
              {gameData.good_words.includes(word) ? 'Good' : 'Bad'}
            </AnswerText>
            <Text onClick={() => handleWordClick(word)}>{word}</Text>
          </WordWrapper>
        ))}
      </WordsContainer>
      <Button onClick={handleCheckAnswers}>
        {areAnswersChecked ? 'Finish Game' : 'Check Answers'}
      </Button>
    </Container>
  );
}
