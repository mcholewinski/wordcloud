import styled from 'styled-components';

import { TypographyI } from './types';

const Text = styled.span<TypographyI>`
  font-weight: ${({ isBold }) => (isBold ? 'bold' : 'normal')};
  display: inline-block;
  font-size: 36px;
`;

Text.displayName = 'Text';

export default Text;
