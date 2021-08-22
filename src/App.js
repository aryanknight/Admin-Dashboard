import './App.css';
import {BrowserRouter,Route} from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Progress from './Pages/Progress';

function App() {
  return (
    <BrowserRouter>

      <Route exact path="/">
        <Dashboard/>
      </Route>
      <Route exact path="/progress-tracker">
        <Progress/>
      </Route>

    </BrowserRouter>
  );
}

export default App;
