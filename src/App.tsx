import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.scss';
import Layout from '@/pages/Layout/Layout';
import Login from '@/pages/Login/Login';
import ProfileEdit from './pages/Profile/Edit';
function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path="/home" component={Layout} />
          <Route path="/login" component={Login} />
          <Route path="/profile/edit" component={ProfileEdit} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
