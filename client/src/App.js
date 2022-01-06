import './App.css';
import {BrowserRouter as Router, Route, Switch }from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import Recipe from './components/Recipe/Recipe';
import Detail from './components/Detail/Detail';
import Contact from './components/contact/Contact';





function App() {
  return (
    <Router>
     
    <div className="App">
<Switch>
<Route exact path='/' component={Landing}/>
     <Route exact path='/home' component={Home}/>
     <Route exact path='/home:id' component={Detail}/>
     <Route exact path='/recipe' component={Recipe}/>
     <Route exact path='/contact' component={Contact}/>

      </Switch>
    </div>
    </Router>
  );
}

export default App;
