import { h, app } from "hyperapp";
import { Route, location } from "@hyperapp/router";

import Layout from "./components/Layout.js";
import Home from "./pages/Home.js";
import About from "./pages/About.js";

const state = {
    location: location.state
};

const actions = {
    location: location.actions
};

const view = () => h("div", {class:"main"}, [
    h(Route, { path: "/", render: () => Layout({}, Home) }),
    h(Route, { path: "/about", render: () => Layout({}, About) })
])

const main = app(state, actions, view, document.body)
const unsubscribe = location.subscribe(main.location);