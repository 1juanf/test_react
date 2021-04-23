import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import dashboard from './pages/dashboard';
import login from './pages/login'
import tabla from './pages/tabla'
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={dashboard}/>
        <Route path="/login" component={login}/>
        <Route path="/table" component={tabla}/>
      </Switch>
    </Router>
  );
}

export default App;
