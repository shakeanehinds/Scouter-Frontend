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
import { AppHeader } from './views/components/AppHeader/index';
import { AppFooter } from './views/components/AppFooter/index';
import { Home } from './views/pages/home/home';
import AdminHome from './views/pages/home-admin/adminHome';

const queryClient = new QueryClient()


function App() {
  //const match = useRouteMatch();
  return (      
    <QueryClientProvider client={queryClient}>
      <div id="App" class="h-screen w-screen">
      <AppHeader />
      <Router>
        <Switch>
          <Route path="/">
              <Home />
          </Route>
          <Route path="/admin">
            <AdminHome />
            </Route>
        </Switch>
      </Router>
      <AppFooter />
    </div>
    </QueryClientProvider>
  );
}

export default App;