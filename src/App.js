import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Header from './components/Header';
// Pages

import HomePage from './pages/HomePage';
import AllDiscountsPage from './pages/AllDiscounts';
import DiscountDetailsPage from './pages/DiscountDetailsPage';

function App() {
  return (
    <>
      <Router>
        <Header />

        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/all-discounts/' component={AllDiscountsPage} />
          <Route path='/all-discounts/:id/' component={DiscountDetailsPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
