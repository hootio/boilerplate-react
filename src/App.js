import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Home from './components/Home';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <Route path="/" exact component={Home} className="container" />
        <Route path="/about" component={About} className="container" />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
