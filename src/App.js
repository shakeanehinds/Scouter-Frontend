import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
  /*Link,
  useRouteMatch,
  useParams*/
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query';
import { Home } from './views/pages/home/index';
import { ApplicantHome } from './views/pages/applicant-home/index';
import AdminHome from './views/pages/home-admin/adminHome';

const queryClient = new QueryClient()


function App() {
  //const match = useRouteMatch();
  return (      
    <QueryClientProvider client={queryClient}>
      <div id="App" className="flex flex-col min-h-screen w-screen">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/admin">
              <AdminHome />
            </Route>
            <Route path="/applicant">
              <ApplicantHome />
            </Route>
          </Switch>
        </Router>
      </div>
    </QueryClientProvider>
  );
}

export default App;