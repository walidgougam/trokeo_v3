import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";
import Home from "./screen/home/Home";
import Login from "./screen/login/Login";
import Register from "./screen/register/Register";
import EditProfile from "./screen/editprofile/EditProfile";
import Review from "./screen/review/Review";
import Product from "./screen/product/Product";
import FollowCategory from "./screen/follow/FollowCategory";
import Setting from "./screen/setting/Setting";
import Organization from "./screen/organization/Organization";
import ProductDetail from "./screen/productDetail/ProductDetail";
import About from "./screen/about/About";
import AllMessage from "./screen/allMessage/AllMessage";
import Chat from "./screen/chat/Chat";
import Profile from "./screen/profile/Profile";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/profile/edit" component={EditProfile} />
        <Route exact path="/review/:id" component={Review} />
        <Route exact path="/product" component={Product} />
        <Route exact path="/product/:id" component={ProductDetail} />
        <Route exact path="/setting" component={Setting} />
        <Route exact path="/followcategory" component={FollowCategory} />
        <Route exact path="/followcategory/edit" component={FollowCategory} />
        <Route exact path="/organization" component={Organization} />
        <Route exact path="/chat" component={AllMessage} />
        <Route exact path="/chat/:id" component={Chat} />
        <Route exact path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;
