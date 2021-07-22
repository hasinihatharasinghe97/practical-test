import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {PostData} from '../../services/PostData'; 

class Login extends Component {
constructor(){
super();
this.state = {
username: '',
password: '',
redirectToReferrer: false
};
this.login = this.login.bind(this);
this.onChange = this.onChange.bind(this);
}
login() {
if(this.state.username && this.state.password){
PostData('login',this.state).then((result) => {
let responseJson = result;
if(responseJson.userData){
sessionStorage.setItem('userData',JSON.stringify(responseJson));
this.setState({redirectToReferrer: true});
}
else
alert(result.error);
});
}
}
onChange(e){
this.setState({[e.target.name]:e.target.value});
}
render() {
if (this.state.redirectToReferrer) {
return (<Redirect to={'/home'}/>)
}
if(sessionStorage.getItem('userData')){
return (<Redirect to={'/home'}/>)
}
return (
<div className="medium-5 columns left">

<center><h3><b>Login</b></h3>
<input type="text" name="username" placeholder="Enter Your Username" onChange={this.onChange}/>
<input type="password" name="password" placeholder="Enter Your Password" onChange={this.onChange}/>
<input type="submit" className="button" value="Login" onClick={this.login}/>

<p>Don't have an account?</p>
<a href="/signup">Register Here</a>
</center>

</div>
);
}
}
export default Login;