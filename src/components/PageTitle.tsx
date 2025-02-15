import React from 'react';

interface PageTitleProps {
  children: React.ReactNode;
}

const PageTitle: React.FC<PageTitleProps> = ({ children }) => {
  return <h3>{children}</h3>;
};

export default PageTitle;
