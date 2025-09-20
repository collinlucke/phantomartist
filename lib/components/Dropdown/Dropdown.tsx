import { useEffect } from 'react';
import { CSSObject } from '@emotion/react';
import { baseColors } from '../../styling/baseTheme';

type DropdownProps = {
  children: React.ReactNode;
  showDropdown: boolean;
  className?: {
    dropdownWrapper?: CSSObject;
  };
  dropdownRef: React.RefObject<HTMLDivElement>;

  closeDropdown: (show: boolean) => void;
};

export const Dropdown = ({
  children,
  showDropdown,
  closeDropdown,
  className,
  dropdownRef
}: DropdownProps) => {
  const hideDropdown = () => {
    closeDropdown(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        hideDropdown();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  });

  return (
    <div
      css={{ ...getDropdownStyles(showDropdown, className) }}
      ref={dropdownRef}
      data-testid="dropdown-wrapper"
    >
      {children}
    </div>
  );
};

const getDropdownStyles = (
  showDropdown: boolean,
  className?: { dropdownWrapper?: CSSObject }
) => ({
  ...localStyles.dropdownWrapper,
  ...className?.dropdownWrapper,
  display: showDropdown ? 'block' : 'none'
});

const localStyles: { [key: string]: CSSObject } = {
  dropdownWrapper: {
    position: 'absolute',
    zIndex: 10,
    backgroundColor: baseColors.tertiary[100],
    borderRadius: '4px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    padding: '8px',
    minWidth: '160px'
  }
};
