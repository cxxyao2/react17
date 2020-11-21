import './App.css';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Movies from './components/movies';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import NavBar from './components/navBar';
import Chef from './components/chef';
import MovieList from './components/movieList';
import LoginForm from './components/LoginForm';


function App() {
  return (
    <>
    <ToastContainer />
    <NavBar />
    <main className="container">
      <Switch>
        <Route path="/movies" component={Movies}></Route>
        <Route path="/customers" component={Customers} ></Route>
        <Route path="/chef" component={Chef} />
        <Route path="/login" component={LoginForm} />
        <Route path="/movieList" component={MovieList} />
        <Route path="/rentals" component={Rentals}></Route>
        <Route path="/not-found" component={NotFound}></Route>
        <Redirect from="/" exact to="/movies" />
        <Redirect to="/not-found" />
      </Switch>

    </main>
    </>
  );
}

export default App;
