import { isValidElement, ReactNode } from 'react';
import { baseTheme } from '../../styling/baseTheme';

type ButtonGroupTypes = {
  children: ReactNode[];
};

export const ButtonGroup: React.FC<ButtonGroupTypes> = ({ children }) => {
  // If you're not a button, you can get the **** out
  const buttonsOnly = children?.filter(
    child =>
      isValidElement(child) &&
      typeof child.type !== 'string' &&
      child.type.name === 'Button'
  );

  return <div css={[baseTheme.buttonGroup]}>{buttonsOnly}</div>;
};
