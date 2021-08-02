import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
  /*Link,
  useRouteMatch,
  useParams*/
} from "react-router-dom";

import { AppHeader } from './views/components/AppHeader/index';
import { AppFooter } from './views/components/AppFooter/index';
import { Home } from './views/pages/home/home';



function App() {
  //const match = useRouteMatch();
  return (
    <div id="App" class="h-screen w-screen">
      <AppHeader />
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </Router>
      <AppFooter />
    </div>
  );
}

export default App;