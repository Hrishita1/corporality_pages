import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  
import AboutCorporality from "./pages/about_corporality/AboutCorporality";
import SustainableGrowth from "./pages/sustainable_growth/SustainableGrowth";
import WorkWithClient from './pages/work_with_client/WorkWithClient';

function App() {

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <div style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", width: "100vw", height: "100vh", backgroundColor: "lightgreen"}}>
                        <h3>Greetings..</h3>
                        <h5>Click <a href="/about-corporality">Here</a> for about corporality page</h5>
                        <h5>Click <a href="/work-with-client">Here</a> for work with client page</h5>
                        <h5>Click <a href="/sustainable-growth">Here</a> for sustainable growth page</h5>
                    </div>
                </Route>
                <Route path="/about-corporality">
                    <AboutCorporality />
                </Route>
                <Route path="/work-with-client">
                    <WorkWithClient />
                </Route>
                <Route to="/sustainable-growth">
                    <SustainableGrowth />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
