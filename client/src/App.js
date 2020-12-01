import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Switch, withRouter} from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import Services from './components/pages/Services/Services';
import Products from './components/pages/Products/Products';
import SignUp from './components/pages/SignUp/SignUp';
import Footer from './components/pages/Footer/Footer';
import ScrollToTop from './ScrollToTop';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import './transitionGroup.css';


const AnimatedSwitch = withRouter(({location})=>(
	<TransitionGroup>
		<CSSTransition key={location.key} classNames="slide" timeout={1000}>
			<Switch location={location}>
			  <Route path="/" exact component={Home}/>
			  <Route path="/services" component={Services}/>
			  <Route path="/products" component={Products}/>
			  <Route path="/signup" component={SignUp}/>
		  	</Switch>
		</CSSTransition>
	</TransitionGroup>
));

function App() {
  return (
    <Router>
      <Navbar />
		  <ScrollToTop />
		  <AnimatedSwitch />
		  <Footer />
    </Router>
  );
}

export default App;
