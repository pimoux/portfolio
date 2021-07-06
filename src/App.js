import {
    BrowserRouter as Router, Route, Switch, Redirect
} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";

function App() {
    return (
        <div className='App'>
            <Router>
                <Navbar />
                <Switch>
                    <div className="pages">
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/portfolio" component={Portfolio} />
                        <Route exact path="/blog" component={Blog} />
                        <Route exact path="/">
                            <Redirect to="/home" />
                        </Route>
                    </div>
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
