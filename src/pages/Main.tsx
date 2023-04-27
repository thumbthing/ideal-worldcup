import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/default/Header';

const Main = () => {
  const navigate = useNavigate();

  const linktoIdeal = () => {
    navigate('/ideal');
  };

  return (
    <Header>
      <button onClick={linktoIdeal}>시작하기</button>
    </Header>
  );
};

export default Main;
