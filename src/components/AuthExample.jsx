import React, { useContext, createContext, useState } from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from 'react-router-dom';

// This example has 3 page: a public page, a protected page, and a login screen.
// public page-> protected page. Auth? no(login page) Yes (do nothing). 
// Login->redirect->protected page->backward->public page.
export default function AuthExample() {
  return (
    
  );
}