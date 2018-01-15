import { h } from "hyperapp";
import { Link } from "@hyperapp/router";

const Navbar = () => h("nav", {}, [
    h(Link, {"to": "/" }, "Home"),
    h(Link, {"to": "/about" }, "About")
])

export default Navbar