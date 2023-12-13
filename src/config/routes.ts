import Home from '../pages/Home'
import About from '../pages/About'
import Passion from '../pages/Passion'
import Expertise from '../pages/Expertise'
import Contact from '../pages/Contact'
import Dashboard from '../pages/Dashboard'

interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string
}

const routes: RouteType[] = [
    {
      path: "",
      component: Home,
      name: "Home Screen",
    },
    {
        path: "/about",
        component: About,
        name: "About",
      },
    {
      path: "/Passion",
      component: Passion,
      name: "My Passion",
    },
    {
      path: "/Expertise",
      component: Expertise,
      name: "My Expertise",
    },
    {
        path: "/Contact",
        component: Contact,
        name: "Contact Me",
    },
    {
      path: "/dashboard",
      component: Dashboard,
      name: "Dashboard",
    },
];

export default routes
