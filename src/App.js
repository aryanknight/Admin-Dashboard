import './App.css';
import {BrowserRouter,Route} from 'react-router-dom';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <BrowserRouter>

      <Route exact path="/">
        <Dashboard/>
      </Route>

    </BrowserRouter>
  );
}

export default App;
