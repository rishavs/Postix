import { h } from "hyperapp";
import { Link } from "@hyperapp/router";

const Navbar = () => h("nav", {}, [
    h(Link, {"to": "/" }, "Home"),
    h(Link, {"to": "/about" }, "About"),
    h(Link, {"to": "/signin" }, "SignIn"),
    h(Link, {"to": "/signup" }, "SignUp")
])

export default Navbar