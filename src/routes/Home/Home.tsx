import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';

import { Button, H1, H3, Input, Label, Text } from '../../components';

import ButtonWrapper from './styled/ButtonWrapper';
import Container from './styled/Container';
import ErrorText from './styled/ErrorText';
import Form from './styled/Form';
import TitleWrapper from './styled/TitleWrapper';

type UserInput = {
  nickName: string;
};

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserInput>();

  const navigate = useNavigate();

  const highscore = localStorage.getItem('highscore');
  const highscoreObj: { nickName: string; score: string } =
    highscore !== null && JSON.parse(highscore);

  const onSubmit: SubmitHandler<UserInput> = ({ nickName }) => {
    sessionStorage.setItem('user_nickName', nickName);
    navigate('/game');
  };

  const errorMessage: string =
    errors.nickName?.type === 'minLength'
      ? 'This nickname is too short!'
      : errors.nickName?.type === 'required'
      ? 'Nickname is required!'
      : errors.nickName?.type === 'maxLength'
      ? 'Nickname is too long!'
      : '';

  return (
    <Container>
      <TitleWrapper>
        <H3>Welcome to the</H3>
        <H1>Wordcloud Game</H1>
        {highscore && (
          <>
            <Text isBold>Highscore:</Text>
            <Text>{`${highscoreObj.nickName} - ${highscoreObj.score}`}</Text>
          </>
        )}
      </TitleWrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="user-nick">Please enter your nickname:</Label>
        <Input
          {...register('nickName', { required: true, minLength: 4, maxLength: 40 })}
          id="user-nick"
        />
        {errors.nickName && <ErrorText>{errorMessage}</ErrorText>}
        <ButtonWrapper>
          <Button type="submit">Play</Button>
        </ButtonWrapper>
      </Form>
    </Container>
  );
}
