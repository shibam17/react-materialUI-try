import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Header from './component/Header';
import LocationMaster from "./component/LocationMaster";
import CompanyMaster from "./component/CompanyMaster";



function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route path='/LocationMaster' component={LocationMaster} />
          <Route path='/CompanyMaster' component={CompanyMaster} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
