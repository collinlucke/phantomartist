import { CSSObject } from '@emotion/react';

type AvatarProps = {
  displayName: string;
  imageUrl?: string;
};

export const Avatar = ({ displayName, imageUrl }: AvatarProps) => {
  console.log(displayName);
  // const initials = displayName
  //   .split(' ')
  //   .map(n => n[0])
  //   .join('')
  //   .toUpperCase();
  return (
    <div css={localStyles.avatar}>
      {imageUrl ? (
        <img src={imageUrl} alt={displayName} css={localStyles.image} />
      ) : (
        <div>{displayName}</div>
      )}
    </div>
  );
};

const localStyles: { avatar: CSSObject; image: CSSObject } = {
  avatar: {
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    overflow: 'hidden',
    display: 'inline-block'
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const
  }
};
