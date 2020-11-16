// import logo from './logo.svg';
import './App.css';
import {
  Route,
  Switch
} from 'react-router-dom';

import Posts from './components/posts';
import Products from './components/products';
import NavBar from './components/navBar';

import Home from "./form/Home";
import DashBoard from './admin/dashboard';
import ProductDetails from './components/productDetails';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <Switch>       
          <Route path="/products/:id" component={ProductDetails} />
          <Route path="/product" component={(props) => <Products sortBy="stock"  {...props}/>} />
          <Route path="/posts" component={Posts} />
          <Route path="/admin"  component={DashBoard} />
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
