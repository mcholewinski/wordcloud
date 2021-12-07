import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

import data from '../data/gameData.json';

interface GameDataI {
  question: string;
  all_words: Array<string>;
  good_words: Array<string>;
}

interface WordCloudI {
  gameData: GameDataI;
  wordsPositions: Array<{ top: string; left: string }>;
  areAnswersChecked: boolean;
  handleCheckAnswers: () => void;
  handleWordClick: (word: string) => void;
  selectedWords: Array<string>;
}

const getRandomOffset = (side: 'top' | 'left'): string => {
  const maxOffset: number = side === 'top' ? 109 : 19;
  return `${Math.floor(Math.random() * (maxOffset - 1 + 1) + 1)}px`;
};

export function useWordcloud(scoreMultiplier: number): WordCloudI {
  const [gameData] = useState<Pick<GameDataI, 'question' | 'all_words' | 'good_words'>>(
    data[Math.floor(Math.random() * data.length)],
  );

  const [wordsPositions, setWordsPositions] = useState<WordCloudI['wordsPositions']>([]);

  const [areAnswersChecked, setAreAnswersChecked] =
    useState<WordCloudI['areAnswersChecked']>(false);

  const [selectedWords, setSelectedWords] = useState<WordCloudI['selectedWords']>([]);

  const navigate = useNavigate();

  useEffect(() => {
    for (let i = 0; i < gameData.all_words.length; i++) {
      let positionObj = { top: getRandomOffset('top'), left: getRandomOffset('left') };
      setWordsPositions((prev) => [...prev, positionObj]);
    }
  }, [gameData]);

  function calculateScore(): number {
    let goodAnswers: number = 0;
    let badAnswers: number = 0;

    selectedWords.forEach((word) => {
      if (gameData.good_words.includes(word)) {
        goodAnswers++;
      } else {
        badAnswers++;
      }
    });

    return (
      goodAnswers * scoreMultiplier - (badAnswers + (gameData.good_words.length - goodAnswers))
    );
  }

  function handleWordClick(word: string) {
    if (selectedWords.includes(word)) {
      selectedWords.filter((item) => item !== word);
    } else {
      setSelectedWords((prev) => [...prev, word]);
    }
  }

  function handleHighscore(score: number) {
    const currentPlayer = sessionStorage.getItem('user_nickName');
    const storedScore = localStorage.getItem('highscore');

    if (!storedScore && currentPlayer) {
      const highscoreObj = { nickName: currentPlayer, score: score.toString() };

      localStorage.setItem('highscore', JSON.stringify(highscoreObj));
    }
    if (storedScore && currentPlayer) {
      const storedScoreObj = JSON.parse(storedScore);

      if (storedScoreObj.score < score) {
        const newScoreObj = { nickName: currentPlayer, score: score.toString() };
        localStorage.setItem('highscore', JSON.stringify(newScoreObj));
      }
    }
  }

  function handleCheckAnswers() {
    if (areAnswersChecked) {
      navigate('/results');
    } else {
      setAreAnswersChecked(true);

      const userScore = calculateScore();
      sessionStorage.setItem('user_score', userScore.toString());
      handleHighscore(userScore);
    }
  }

  return {
    gameData,
    areAnswersChecked,
    handleCheckAnswers,
    handleWordClick,
    wordsPositions,
    selectedWords,
  };
}
