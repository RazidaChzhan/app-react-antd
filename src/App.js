import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./pages/mainPage";
import NotFound from './components/NotFound';
import AddNewsPage from "./pages/addNewsPage";
import DetailPage from "./pages/detailPage";


export default class Menu extends Component {
    render() {
        return (
            <Router>
                <Switch>
                  <Route exact path="/" component={MainPage} />
                  <Route exact path="/allnews" component={MainPage} />
                  <Route path="/detail" component={DetailPage}/>
                  <Route path="/add" component={AddNewsPage} />       
                  <Route component={NotFound}/>
                </Switch>
            </Router>
      
        );
    }
}                               