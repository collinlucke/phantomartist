import { ReactNode } from 'react';
import { baseTheme } from '../../styling/baseTheme';

type ButtonGroupTypes = {
  children: ReactNode;
};

export const ButtonGroup: React.FC<ButtonGroupTypes> = ({ children }) => {
  return <div css={[baseTheme.buttonGroup]}>{children}</div>;
};
