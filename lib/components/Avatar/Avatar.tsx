import { CSSObject } from '@emotion/react';
import { baseColors } from '../../styling/baseTheme';

type AvatarProps = {
  displayName: string;
  imageUrl?: string;
};

// TODO: Add images later
export const Avatar = ({ displayName }: AvatarProps) => {
  const initials = displayName.split(' ').map(n => n[0]);

  return (
    <div css={localStyles.avatar}>
      <div css={localStyles.initials}>
        {initials[0]}
        {initials[1]}
      </div>
    </div>
  );
};

const localStyles: { [key: string]: CSSObject } = {
  avatar: {
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: baseColors.secondary[700]
  },
  initials: {
    color: baseColors.tertiary[100],
    fontWeight: '500',
    fontSize: '1rem'
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const
  }
};
