import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import { Button, H1, H2, H3 } from '../../components';

import BlueHighlight from './styled/BlueHighlight';
import Container from './styled/Container';

export default function Results() {
  const currentPlayer = sessionStorage.getItem('user_nickName');
  const playerScore = sessionStorage.getItem('user_score');

  const navigate = useNavigate();

  useEffect(() => {
    if (!currentPlayer) navigate('/');
  }, []);

  return (
    <Container>
      <H1>Results</H1>
      <H2>
        Congratulations <BlueHighlight>{currentPlayer}</BlueHighlight>!
      </H2>
      <H3>Your score:</H3>
      <H2 isBold>
        <BlueHighlight>{playerScore}</BlueHighlight>
      </H2>
      <Button onClick={() => navigate('/')}>Play Again</Button>
    </Container>
  );
}
