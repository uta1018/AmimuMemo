import React from 'react';
import styles from "./PageTitle.module.scss"

interface PageTitleProps {
  children: React.ReactNode;
}

const PageTitle: React.FC<PageTitleProps> = ({ children }) => {
  return <h3 className={styles.title}>{children}</h3>;
};

export default PageTitle;
