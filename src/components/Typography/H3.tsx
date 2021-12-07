import styled from 'styled-components';

import { TypographyI } from './types';

const H3 = styled.h3<TypographyI>`
  font-weight: ${({ isBold }) => (isBold ? 'bold' : 'normal')};
  font-size: 48px;
`;

H3.displayName = 'H3';

export default H3;
