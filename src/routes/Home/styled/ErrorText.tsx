import styled from 'styled-components';

import { Text } from '../../../components';

const ErrorText = styled(Text)`
  color: ${({ theme }) => theme.colors.red};
  font-size: 18px;
  position: absolute;
`;

ErrorText.displayName = 'HomeErrorText';

export default ErrorText;
