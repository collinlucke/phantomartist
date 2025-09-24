import { CSSObject } from '@emotion/react';
import { baseColors } from '../../styling/baseTheme';

type AvatarProps = {
  displayName: string;
  imageUrl?: string;
  className?: {
    avatar?: CSSObject;
    initials?: CSSObject;
    image?: CSSObject;
  };
  size?: number;
};

// TODO: Add images later
export const Avatar = ({
  displayName = 'Display Name',
  className,
  size = 40
}: AvatarProps) => {
  const initials = displayName.split(' ').map(n => n[0].toUpperCase());

  return (
    <div css={[getAvatarStyles(size), className?.avatar]}>
      <div css={[getInitialsStyles(size), className?.initials]}>
        {initials[0]}
        {initials[1]}
      </div>
    </div>
  );
};

const getAvatarStyles = (size: number): CSSObject => ({
  ...localStyles.avatar,
  width: `${size}px`,
  height: `${size}px`,
  lineHeight: `${size}px`
});

const getInitialsStyles = (size: number): CSSObject => ({
  ...localStyles.initials,
  fontSize: `${size / 2}px`
});

const localStyles: { [key: string]: CSSObject } = {
  avatar: {
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: baseColors.secondary[700]
  },
  initials: {
    color: baseColors.tertiary[100],
    fontWeight: '500'
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const
  }
};
