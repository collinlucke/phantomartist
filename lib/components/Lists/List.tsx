import { ReactNode } from 'react';

type ListProps = {
  children?: ReactNode;
  className?: string;
};

export const List: React.FC<ListProps> = ({ children, className }) => {
  console.log(className);
  return <ul className="bg-red-300">{children}</ul>;
};
