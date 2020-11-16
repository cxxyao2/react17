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

import LoginForm from './LoginForm';


// This example has 3 page: a public page, a protected page, and a login screen.
// public page-> protected page. Auth? no(login page) Yes (do nothing). 
// Login->redirect->protected page->backward->public page.
export default function AuthExample() {
  return (
    <ProvideAuth>
      <Router>
        <div>
          <AuthButton />

          <ul>
            <li>
              <Link to="/public">Public Page</Link>
            </li>
            <li>
              <Link to="/protected">Protected Page</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/public">
              <PublicPage />
            </Route>
            <Route path="/login">
              <LoginForm />
            </Route>
            <PrivateRoute path="/protected">
              <ProtectedPage />
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
    </ProvideAuth>  
  );

}

const fakeAuth = {
  isAuthenticated: false,
  signin(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const authContext = createContext();

function ProvideAuth( {children}) {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>
      { children}
    </authContext.Provider>
  );
}

function useAuth() {
  return useContext(authContext);
}

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signin = cb => {
    return fakeAuth.signin(() => {
      setUser("user");
      cb();
    });
  };

  const signout = cb => {
    return fakeAuth.signout(() => {
      setUser(null);
      cb();
    });
  };

  return {
    user,
    signin,
    signout
  };

}

function AuthButton() {
  let history = useHistory();
  let auth = useAuth();

  return auth.user ? (
    <p>
      Welcome!{" "}
      <button 
        onClick={() => {
          auth.signout(() => history.push("/"));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in</p>
  );
}

// A wrapper for <Route> that redirects to the login form
// si you're not yet authenticated.
function PrivateRoute({children, ...rest}){
  let auth = useAuth();
  return (
    <Route 
      {...rest}
      render={({location}) => 
        auth.user ? (
          children
        ) : (<Redirect 
          to={{
            pathname: "/login",
            state: { from: location}
          }}
        />)
      }
    />
  );
}

function PublicPage() {
  return <h3>Public</h3>;
}

function ProtectedPage() {
  return <h3>Protected</h3>;
}

function LoginPage() {
  let history = useHistory();
  let location = useLocation();
  let auth = useAuth();

  let { from } = location.state || { from: { pathname: "/" }};
  let login = () => {
    auth.signin(() => {
      history.replace(from);
    })
  };

  return (
    <div>
      <p>You must log in at {from.pathname} </p>
      <button onClick={login}>Log in</button>
    </div>
  );



}