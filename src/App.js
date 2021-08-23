import './App.css';
import {BrowserRouter,Route} from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Progress from './Pages/Progress';
import Notifications from './Pages/Notifications'; 

function App() {
  return (
    <BrowserRouter>

      <Route exact path="/">
        <Dashboard/>
      </Route>
      <Route exact path="/progress-tracker">
        <Progress/>
      </Route>
      <Route exact path="/notifications">
        <Notifications/>
      </Route>

    </BrowserRouter>
  );
}

export default App;
