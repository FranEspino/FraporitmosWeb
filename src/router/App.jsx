import PageNotFound from '../pages/PageNotFound'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Works from '../pages/Works';
import Valoration from '../pages/Valoration';
import Contact from '../pages/Contact';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={About} />
        <Route path="/about" exact component={About} />

        <Route path="/projects" exact component={Projects} />
        <Route path="/works" exact component={Works} />
        <Route path="/valorations" exact component={Valoration} />
        <Route path="/contact" exact component={Contact} />

        <Route component={() => <PageNotFound />} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
