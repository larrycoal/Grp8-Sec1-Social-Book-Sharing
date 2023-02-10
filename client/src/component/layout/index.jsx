import React from 'react';
import "./layout.scss"
const index = ({children}) => {
    return (
      <div className="layout_wrapper">
        <header>
          <nav>
            <h2>Logo</h2>
            <ul>
              <li>firstname lastname</li>
              <li>logout</li>
            </ul>
          </nav>
        </header>
        <div className='content'>{children}</div>
        <footer>group 8 project</footer>
      </div>
    );
};

export default index;