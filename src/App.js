import "./App.css";
import { Route, Routes } from "react-router-dom";
// import Header from "./componets/Header";
import React from "react";
import Login from "./componets/Login";
import Dashboard from "./componets/View/Dashboard";
import { mainSidebar } from "./componets/Partials";
function App() {
  const routes = [
    {path: "/", component: Login, layout: null },
    {path: "/login", component: Login, layout: null },
    {path: "/dashboard", component: Dashboard,  layout: mainSidebar },
  ]
  // header sidebar => variables => 
  return (
    <React.Fragment>
       <div className="App">
       <Routes>
          {routes.length > 0 && routes.map((route, index) => {
            const Component = route.component;
            let Layout;
            if(route.layout == null) {
              Layout = React.Fragment;
            } else {
              Layout = route.layout
            }

            return <Route key={index} path={route.path} element={<Layout><Component /></Layout>} />
          } )}
        </Routes>
       </div>
    </React.Fragment>
  );
}

export default App;
