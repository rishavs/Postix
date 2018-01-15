import { h, app } from "hyperapp";

const state = {}
const actions = {}
const view = (state, actions) =>
  h("h1", {}, "HELLO WORLD")

window.main = app(state, actions, view, document.body)