import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import LocationsList from './components/LocationsList';
import AddLocation from './components/AddLocation';
import AddPlans from './components/AddPlans';
import PlansList from './components/PLansList';



function App() {
  const [reload, setReload] = useState(false);

  const handleReload = (status) => {
    setReload(status);
  }

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/locations">
            <AddLocation handleReload={handleReload}/>
            <LocationsList reload={reload}/>
          </Route>
          <Route exact path="/locations/:slug">
            <AddPlans handleReload={handleReload}/>
            <PlansList reload={reload}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
