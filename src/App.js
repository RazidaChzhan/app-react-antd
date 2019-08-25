import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./components/mainPage";
import NewsList from './components/newsList';
import DetailNews from './components/detailNews';
import AddNews from './components/addNews';
import NotFound from './components/NotFound';


export default class Menu extends Component {
    render() {
        return (
            <Router>
                <Switch>
                  <Route exact path="/" component={MainPage} />
                  <Route exact path="/allnews" component={NewsList} />
                  <Route path="/detail" component={DetailNews} />
                  <Route path="/add" component={AddNews} />       
                  <Route component={NotFound}/>
                </Switch>
            </Router>
      
        );
    }
}                               