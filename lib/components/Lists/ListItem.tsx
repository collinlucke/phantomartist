import React, { ReactNode } from 'react';

export type ListItemProps = {
  children: ReactNode;
  id: React.Key;
};

export const ListItem: React.FC<ListItemProps> = ({ children, id }) => {
  return (
    <li className="bg-blue-30" key={id}>
      {children}
    </li>
  );
};
