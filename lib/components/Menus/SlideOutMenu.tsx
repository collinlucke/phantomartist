import { CSSObject } from '@emotion/react';
import { useState } from 'react';
import { Menu01Icon, Cancel01Icon } from 'hugeicons-react';
import { baseColors } from '../../styling/baseTheme';
import { Button } from '../Buttons/Button';

type SlideOutMenuProps = {
  children: React.ReactNode;
  from?: 'left' | 'right';
  isMobile?: boolean;
};

export const SlideOutMenu: React.FC<SlideOutMenuProps> = ({
  children,
  from = 'right',
  isMobile = false
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpenClosed = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div css={localStyles.slideOutMenu}>
      <Button
        kind="ghostOnDark"
        size="small"
        iconOnly
        icon={<Menu01Icon size={24} />}
        onClick={toggleOpenClosed}
        ariaLabel={isOpen ? 'Close menu' : 'Open menu'}
        className={{ button: getOpenButtonStyles(isMobile) }}
      />
      <div css={getOverlayStyles(isOpen)} onClick={toggleOpenClosed}>
        <div css={getMenuStyles(from, isOpen)}>
          <Button
            kind="ghostOnDark"
            className={{ button: getCloseButtonStyles(isMobile) }}
            icon={<Cancel01Icon size={24} />}
            onClick={toggleOpenClosed}
          />
          {children}
        </div>
      </div>
    </div>
  );
};

const getOpenButtonStyles = (isMobile: boolean): CSSObject => {
  return {
    ...localStyles.openButton,
    ...(isMobile ? { position: 'absolute', top: '16px', right: '16px' } : {})
  };
};

const getOverlayStyles = (isOpen: boolean): CSSObject => {
  return {
    ...localStyles.slideOutOverlay,
    opacity: isOpen ? 1 : 0,
    visibility: isOpen ? 'visible' : 'hidden',
    transition: 'opacity 0.3s ease, visibility 0.3s ease'
  };
};

const getMenuStyles = (from: 'left' | 'right', isOpen: boolean): CSSObject => {
  return {
    ...localStyles.menuContainer,
    ...(from === 'left' ? { left: 0 } : { right: 0 }),
    transform: isOpen
      ? 'translateX(0)'
      : `translateX(${from === 'left' ? '-100%' : '100%'})`,
    transition: 'transform 0.3s ease-in-out'
  };
};

const getCloseButtonStyles = (isMobile: boolean): CSSObject => {
  return {
    ...localStyles.closeButton,
    ...(isMobile ? { marginBottom: '10px' } : { marginBottom: '35px' })
  };
};

const localStyles: { [key: string]: CSSObject } = {
  slideOutMenu: {
    display: 'flex'
  },
  slideOutOverlay: {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'flex-end',
    pointerEvents: 'auto' as const
  },
  menuContainer: {
    position: 'relative' as const,
    backgroundColor: baseColors.primary[500],
    width: '280px',
    height: '100%',
    padding: '20px',
    boxShadow: '-2px 0 8px rgba(0, 0, 0, 0.3)',
    overflowY: 'auto' as const,
    display: 'flex',
    flexDirection: 'column' as const
  },
  openButton: {
    padding: '16px',
    zIndex: 10,
    '&:hover': { boxShadow: 'none' }
  },
  closeButton: {
    padding: 0,
    alignSelf: 'flex-end',
    '&:hover': { boxShadow: 'none' }
  }
};
