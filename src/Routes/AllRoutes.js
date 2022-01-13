import { Route, Router, Switch } from "react-router-dom"
import Category from "../Pages/catagorypage"
import Home from "../Pages/home";
import { createBrowserHistory } from 'history';
const newHistory = createBrowserHistory();
const AllRoutes = ()=>{
    return (
        <>
            <Router history={newHistory}>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact={true} path="/cat">
                        <Category/>
                    </Route>
                </Switch>
            </Router>
        </>
    )
}
export default AllRoutes