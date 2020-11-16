import React from 'react';
import {Link} from 'react-router-dom';

export default function NavBar() {
  return (
    <ul>
      <li>
        <Link to="/product">products</Link>
      </li>
      <li>
        <Link to="/posts">posts</Link>
      </li>
      <li>
        <Link to="/">Home</Link>
      </li>
    
    </ul>
  );
}