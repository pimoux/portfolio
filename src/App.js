import {
    BrowserRouter as Router, Route, Switch, Redirect
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import ProjectDetails from "./pages/ProjectDetails";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";


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
                        <Route path="/project/:id" component={ProjectDetails} />
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
