import react, {Component} from 'react';
import './App.css';
import { Button, Form, FormGroup, Label, Input}
from 'reactstrap';
import{FacebookLoginButton} from 'react-social-login-buttons';
class App extends Component {
  render() {
  return (
    <form className="App">
     <h1>
       <span>MyWebSite</span>.com
     </h1>
     <h2>Welcome</h2>
     <FormGroup className="email">
      <label>Email</label> <br></br> 
      <input type="email" placeholder="Email"/>
     </FormGroup>
     <FormGroup className="password">
      <label>Password</label> 
      <input type="password" placeholder="Password"/>
     </FormGroup>
     <Button className="btn-lg btn-dark btn-block">
       Log in
     </Button>
     <div>or continue with your social account</div>
   <FacebookLoginButton/>
   <div>
     <a href="/sign-up">sign-up</a>
     <span className="sp">|</span>
     <a href="/Forgot password">Forgot Password</a>
   </div>
   </form>
  );
}
}
export default App;
