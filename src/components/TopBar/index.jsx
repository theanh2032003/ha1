// components/TopBar/TopBar.jsx

import React from 'react';
import { withRouter } from 'react-router-dom';

const TopBar = ({ location }) => {
  const getPageContext = () => {
    const { pathname } = location;
    const parts = pathname.split('/');
    const context = parts[1];
    const userId = parts[2];

    switch (context) {
      case 'users':
        if (userId) {
          return `Details of User ${userId}`;
        }
        return 'User List';
      case 'photos':
        return `Photos of User ${userId}`;
      default:
        return '';
    }
  };

  return (
    <div>
      <div style={{ float: 'left' }}>Your Name</div>
      <div style={{ float: 'right' }}>{getPageContext()}</div>
    </div>
  );
};

export default withRouter(TopBar);
