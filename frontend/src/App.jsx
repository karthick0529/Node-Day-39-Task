import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import CreateMentor from './components/CreateMentor';
import CreateStudent from './components/CreateStudent';
import AssignStudent from './components/AssignStudent';
import ChangeMentor from './components/ChangeMentor';
import StudentsByMentor from './components/StudentsByMentor';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/create-mentor">Create Mentor</Link>
            </li>
            <li>
              <Link to="/create-student">Create Student</Link>
            </li>
            <li>
              <Link to="/assign-student">Assign Student</Link>
            </li>
            <li>
              <Link to="/change-mentor">Change Mentor</Link>
            </li>
            <li>
              <Link to="/students-by-mentor">Students by Mentor</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/create-mentor" component={CreateMentor} />
          <Route path="/create-student" component={CreateStudent} />
          <Route path="/assign-student" component={AssignStudent} />
          <Route path="/change-mentor" component={ChangeMentor} />
          <Route path="/students-by-mentor" component={StudentsByMentor} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
