import React, { Component } from 'react';
import './styles/foundation.min.css';
import './styles/custom.css';
import Routes from './routes';
import Header from './components/Header/Header';
import MobileHeader from './components/MobileHeader/MobileHeader';
class App extends Component {
constructor(){
super();
this.state={
appName: "WEB WONDERS",
home: false
}
}
render() {
return (
<div>
<MobileHeader name={this.state.appName}/>
<Header name={this.state.appName}/>
<Routes name={this.state.appName}/>

</div>


);
}
}
export default App;
