import React, { useState, useRef, useEffect } from 'react';
import { CSSObject } from '@emotion/react';
import { Button } from '../Buttons/Button';
import { hexToRgba } from '../../styling/hexToRgba.ts';
import { baseColors } from '../../styling/baseTheme';

type AccordionListItemProps = {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onToggle?: (isOpen: boolean) => void;
  disabled?: boolean;
  className?: {
    item?: CSSObject;
    header?: CSSObject;
    content?: CSSObject;
    icon?: CSSObject;
  };
  ariaLabel?: string;
  dataTestId?: string;
  useAnimation?: boolean;
};

export const AccordionListItem: React.FC<AccordionListItemProps> = ({
  title,
  children,
  isOpen = false,
  onToggle,
  disabled = false,
  className,
  ariaLabel,
  dataTestId,
  useAnimation = true
}) => {
  const [internalOpen, setInternalOpen] = useState(isOpen);
  const [contentHeight, setContentHeight] = useState<number | undefined>(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const isControlled = onToggle !== undefined;
  const isExpanded = isControlled ? isOpen : internalOpen;

  useEffect(() => {
    if (useAnimation && contentRef.current) {
      setContentHeight(isExpanded ? contentRef.current.scrollHeight : 0);
    }
  }, [isExpanded, useAnimation, children]);

  useEffect(() => {
    if (!useAnimation || !isExpanded) return;

    const handleResize = () => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [useAnimation, isExpanded]);

  const handleToggle = () => {
    if (disabled) return;

    if (isControlled) {
      onToggle?.(isOpen);
    } else {
      setInternalOpen(!internalOpen);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleToggle();
    }
  };

  return (
    <li
      css={[localStyles.accordionItem, className?.item]}
      className="pa-accordion-item"
      data-testid={dataTestId}
    >
      <Button
        className={{
          button: {
            ...localStyles.accordionHeader,
            ...(disabled && localStyles.disabled),
            ...className?.header
          }
        }}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        aria-expanded={isExpanded}
        aria-controls={`accordion-content-${dataTestId || 'default'}`}
        aria-label={ariaLabel || `Toggle ${title}`}
        disabled={disabled}
        type="button"
        testId={`pa-accordion-header-${dataTestId || 'default'}`}
      >
        <>
          <div css={localStyles.title}>{title}</div>
          <span
            css={[
              localStyles.icon,
              isExpanded && localStyles.iconExpanded,
              className?.icon
            ]}
            className="pa-accordion-icon"
            aria-hidden="true"
          >
            ▼
          </span>
        </>
      </Button>

      <div
        css={[
          localStyles.contentWrapper,
          useAnimation && {
            height: contentHeight,
            overflow: 'hidden',
            transition: 'height 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
          },
          !useAnimation && !isExpanded && { display: 'none' }
        ]}
        className="pa-accordion-content-wrapper"
      >
        <div
          ref={contentRef}
          css={[localStyles.content, className?.content]}
          className="pa-accordion-content"
          id={`accordion-content-${dataTestId || 'default'}`}
          role="region"
          aria-labelledby={`accordion-header-${dataTestId || 'default'}`}
        >
          {children}
        </div>
      </div>
    </li>
  );
};

const localStyles: { [key: string]: CSSObject } = {
  accordionItem: {
    width: '100%',
    borderBottom: `1px solid ${baseColors.primary[200]}`,
    listStyleType: 'none'
  },

  accordionHeader: {
    width: '100%',
    padding: '12px 20px',
    backgroundColor: 'transparent',
    border: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
    fontSize: '18px',
    fontWeight: 600,
    color: baseColors.tertiary[50],
    textAlign: 'left',
    transition: 'background-color 0.2s ease, color 0.2s ease',

    '&:hover': {
      backgroundColor: baseColors.primary[50],
      color: baseColors.primary[600]
    },

    '&:focus': {
      color: baseColors.primary[600],
      outline: `2px solid ${baseColors.primary[400]}`,
      outlineOffset: '-2px',
      backgroundColor: baseColors.primary[50]
    }
  },

  disabled: {
    opacity: 0.6,
    cursor: 'not-allowed',

    '&:hover': {
      backgroundColor: 'transparent',
      color: baseColors.primary[500]
    }
  },

  title: {
    flex: 1,
    marginRight: '12px'
  },

  icon: {
    fontSize: '12px',
    transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    color: baseColors.primary[300],
    userSelect: 'none',
    lineHeight: 1
  },

  iconExpanded: {
    transform: 'rotate(180deg)'
  },

  contentWrapper: {
    overflow: 'hidden'
  },

  content: {
    padding: '14px 20px 14px 40px',
    backgroundColor: hexToRgba(baseColors.primary[50], 0.2)
  }
};
