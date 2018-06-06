import { h, app } from "hyperapp";
import { Route, location } from "@hyperapp/router";

import Layout from "./components/Layout.js";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import SignIn from "./pages/SignIn.js";
import SignUp from "./pages/SignUp.js";

const state = {
    location: location.state
};

const actions = {
    location: location.actions
};

const view = () => h("div", {class:"main"}, [
    h(Route, { path: "/", render: () => Layout({}, Home) }),
    h(Route, { path: "/about", render: () => Layout({}, About) }),
    h(Route, { path: "/signin", render: () => Layout({}, SignIn) }),
    h(Route, { path: "/signup", render: () => Layout({}, SignUp) }),
])

const main = app(state, actions, view, document.body)
const unsubscribe = location.subscribe(main.location);