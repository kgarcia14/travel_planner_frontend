import LocationsList from './components/LocationsList';
import AddLocation from './components/AddLocation';
import { BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react';
import Styled from "styled-components";

const Div = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

function App() {
  const [reload, setReload] = useState(false);

  const handleReload = (status) => {
    setReload(status);
  }

  return (
    <div className="App">
      <Div>
        <h1>Plan Ahead</h1>
        <AddLocation handleReload={handleReload}/>
        <Router>
          <LocationsList reload={reload}/>
        </Router>
      </Div>
    </div>
  );
}

export default App;
