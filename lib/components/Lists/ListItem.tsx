import React, { ReactNode } from 'react';

type ListItemProps = {
  children: ReactNode;
  id: React.Key;
  className?: string;
};

export const ListItem: React.FC<ListItemProps> = ({ children, id }) => {
  return <li key={id}>{children}</li>;
};
