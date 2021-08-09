import './App.css';
import AdminHome from './views/pages/admin_home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCompanies } from './network';
import JobsPage from './views/pages/jobs';
import CompaniesPage from './views/pages/companies';
import CompanyDetails from './views/pages/company_details';
import PostingPage from './views/pages/posting';
import AddCompanyPage from './views/pages/add_company';

function App() {
  const [companies, setCompanies] = useState([]);

  // get companies
  useEffect(() => {
    getCompanies()
      .then((resp) => resp.data)
      .then((data) => setCompanies(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Router>
      <Switch>
        <Route path={'/admin'}>
          <AdminHome />
        </Route>
        <Route path={'/jobs'}>
          <JobsPage />
        </Route>

        <Route path={'/companies'}>
          <CompaniesPage companies={companies} />
        </Route>

        <Route path={'/company-details/:id'}>
          <CompanyDetails />
        </Route>

        <Route path={'/job-posting/:id'}>
          <PostingPage />
        </Route>

        <Route path={'/add-company'}>
          <AddCompanyPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
