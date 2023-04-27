import './Header.scss';
import React from 'react';

type HeaderProps = {
  children: React.ReactNode;
};

const Header = ({ children }: HeaderProps) => {
  return (
    <div className="HeaderContainer">
      <h1>이상형 월드컵</h1>
      {children}
    </div>
  );
};

export default Header;
