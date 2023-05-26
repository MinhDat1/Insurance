import Login from "../componets/Login";
import Dashboard from "../componets/View/Dashboard";
import MyAccount from "../componets/View/myAccount";
import Contact from "../componets/View/Contact";
import Rewards from "../componets/View/Rewards";
import Policies from "../componets/View/Policies";
import Support from "../componets/View/Support";
import { mainSidebar } from "../componets/Partials";

const routes = [
  { path: "/", component: Login, layout: null },
  { path: "/login", component: Login, layout: null },
  { path: "/dashboard", component: Dashboard, layout: mainSidebar },
  { path: "/myAccount", component: MyAccount, layout: mainSidebar },
  { path: "/contact", component: Contact, layout: mainSidebar },
  { path: "/rewards", component: Rewards, layout: mainSidebar },
  { path: "/policies", component: Policies, layout: mainSidebar },
  { path: "/support", component: Support, layout: mainSidebar },
];

export default routes;
