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
import { Home } from './views/pages/home/home';
import AdminHome from './views/pages/home-admin/adminHome';

const queryClient = new QueryClient()


function App() {
  //const match = useRouteMatch();
  return (      
    <QueryClientProvider client={queryClient}>
      <div id="App" className="h-screen w-screen">
      <Router>
        <Switch>
            <Route exact path="/">
              <Home />
          </Route>
          <Route path="/admin">
            <AdminHome />
            </Route>
        </Switch>
        </Router>
    </div>
    </QueryClientProvider>
  );
}

export default App;