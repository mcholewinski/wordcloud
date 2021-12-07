import styled from 'styled-components';

import { TypographyI } from './types';

const H2 = styled.h2<TypographyI>`
  font-weight: ${({ isBold }) => (isBold ? 'bold' : 'normal')};
  font-size: 64px;
`;

H2.displayName = 'H2';

export default H2;
