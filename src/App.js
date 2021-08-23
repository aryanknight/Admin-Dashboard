import './App.css';
import {BrowserRouter,Route} from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Progress from './Pages/Progress';
import Notifications from './Pages/Notifications'; 
import TasksPage from './Pages/TasksPage';
import ProcessesPage from './Pages/ProcessesPage';

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
      <Route exact path="/tasks">
        <TasksPage/>
      </Route>
      <Route exact path="/processes">
        <ProcessesPage/>
      </Route>

    </BrowserRouter>
  );
}

export default App;
