import { CSSObject } from '@emotion/react';
import { Cancel01Icon } from 'hugeicons-react';
import { baseColors } from '../../styling/baseTheme';
import { Button } from '../Buttons/Button';

type SlideOutMenuProps = {
  children: React.ReactNode;
  from?: 'left' | 'right';
  isMobile?: boolean;
  showSlideOut: boolean;
  setShowSlideOut: (show: boolean) => void;
};

export const SlideOutMenu: React.FC<SlideOutMenuProps> = ({
  children,
  from = 'right',
  isMobile = false,
  showSlideOut = false,
  setShowSlideOut
}) => {
  const onCloseHandler = () => {
    setShowSlideOut(false);
  };
  return (
    <div css={localStyles.slideOutMenu}>
      <div css={getOverlayStyles(showSlideOut)} onClick={onCloseHandler}></div>
      <div css={getMenuStyles(from, showSlideOut)}>
        <Button
          variant="ghostOnDark"
          className={{ button: getCloseButtonStyles(isMobile) }}
          icon={<Cancel01Icon size={24} />}
          onClick={onCloseHandler}
        />
        {children}
      </div>
    </div>
  );
};

const getOverlayStyles = (showSlideOut: boolean): CSSObject => {
  return {
    ...localStyles.slideOutOverlay,
    opacity: showSlideOut ? 1 : 0,
    visibility: showSlideOut ? 'visible' : 'hidden',
    transition: 'opacity 0.3s ease, visibility 0.3s ease'
  };
};

const getMenuStyles = (
  from: 'left' | 'right',
  showSlideOut: boolean
): CSSObject => {
  return {
    ...localStyles.menuContainer,
    ...(from === 'left' ? { left: 0 } : { right: 0 }),
    transform: showSlideOut
      ? 'translateX(0)'
      : `translateX(${from === 'left' ? '-100%' : '100%'})`,
    transition: 'transform 0.1s ease-in-out',
    boxShadow: showSlideOut ? '-2px 0 8px rgba(0, 0, 0, 0.3)' : 'none'
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
    display: 'flex',
    overflow: 'hidden' as const
  },
  slideOutOverlay: {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: 100,
    display: 'flex',
    justifyContent: 'flex-end',
    pointerEvents: 'auto' as const
  },
  menuContainer: {
    position: 'fixed' as const,
    top: 0,
    zIndex: 100,
    backgroundColor: baseColors.primary[500],
    width: '280px',
    height: '100%',
    padding: '20px',
    overflowY: 'auto' as const,
    display: 'flex',
    flexDirection: 'column' as const
  },
  closeButton: {
    padding: 0,
    alignSelf: 'flex-end',
    '&:hover': { boxShadow: 'none' }
  }
};
