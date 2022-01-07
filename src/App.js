import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './components/pages/Home'
import About from './components/pages/About'
import Blog from './components/pages/Blog'
// import Contact from './components/pages/Contact'
import Contact from './components/pages/Contact'
import Portfolio from './components/pages/Portfolio'
import HireMe from './components/pages/HireMe'
import Testimonials from './components/pages/Testimonials'
import PrivacyPolicy from './components/pages/PrivacyPolicy'
import TermsOfService from './components/pages/TermsOfService'



function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/blog' component={Blog} />
          <Route path='/contact' component={Contact} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/hire-me' component={HireMe} />
          <Route path='/testimonials' component={Testimonials} />
          <Route path='/privacypolicy' component={PrivacyPolicy} />
          <Route path='/termsofservice' component={TermsOfService} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
