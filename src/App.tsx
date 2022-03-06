import { BrowserRouter as Router, Switch, Link, Route, Redirect } from 'react-router-dom';
import './App.scss';
import Layout from './pages/Layout/Layout';
import Login from './pages/Login/Login';
function App() {
  return (
    <Router>
      <div className="app">
        <Link to="/home">跳转首页</Link>
        <Link to="/login">跳转登陆页</Link>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path="/home" component={Layout} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
