import {useEffect} from 'react';
import auth from '../services/authservice';

const Logout = () => {

  useEffect(()=>{
    auth.logout();
    window.location="/";
  },[]);

  return null;
}
 
export default Logout;