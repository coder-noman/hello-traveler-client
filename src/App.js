import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './pages/Shared/Header/Header'
import Footer from './pages/Shared/Footer/Footer'
import Home from './pages/Homes/Home/Home'
import About from './pages/Abouts/About/About'
import Package from './pages/Package/Package/Package'
import PageNotFound from './pages/NotFound/PageNotFound/PageNotFound'
import LogIn from './pages/Shared/LogIn/LogIn';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import PackageRegister from './pages/Package/PackageRegister/PackageRegister';

function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
          <Home></Home>
          </Route>
          <Route path="/home">
          <Home></Home>
          </Route>
          <Route path="/about">
          <About></About>
          </Route>
          <Route exact path="/package">
          <Package></Package>
          </Route>
          <PrivateRoute exact path="/package/packageregister">
          <PackageRegister></PackageRegister>
          </PrivateRoute>
          <Route path="/login">
          <LogIn></LogIn>
          </Route>
          <Route path="*">
          <PageNotFound></PageNotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
