import "./App.css";
import { Route, Routes } from "react-router-dom";
import React from "react";
import Login from "./componets/Login";
import Dashboard from "./componets/View/Dashboard";
import myAccount from "./componets/View/myAccount";
import Contact from "./componets/View/Contact";
import Rewards from "./componets/View/Rewards";
import Policies from "./componets/View/Policies";
import Support from "./componets/View/Support";
import { mainSidebar } from "./componets/Partials";
function App() {
  const routes = [
    { path: "/", component: Login, layout: null },
    { path: "/login", component: Login, layout: null },
    { path: "/dashboard", component: Dashboard, layout: mainSidebar },
    { path: "/myAccount", component: myAccount, layout: mainSidebar },
    { path: "/contact", component: Contact, layout: mainSidebar },
    { path: "/rewards", component: Rewards, layout: mainSidebar },
    { path: "/policies", component: Policies, layout: mainSidebar },
    { path: "/support", component: Support, layout: mainSidebar },
  ];
  // header sidebar => variables =>
  return (
    <React.Fragment> 
      <div className="App">
        <Routes>
          {routes.length > 0 &&
            routes.map((route, index) => {
              const Component = route.component;
              let Layout;
              if (route.layout == null) {
                Layout = React.Fragment;
              } else {
                Layout = route.layout;
              }
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Component />
                    </Layout>
                  }
                />
              );
            })}
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
