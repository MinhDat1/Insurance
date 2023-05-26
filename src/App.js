import "./App.css";
import { Route, Routes } from "react-router-dom";
import React from "react";
import routes from "./Config/routes";
import { useAuthState } from "./store";
import Login from "./componets/Login";

function App() {

  const data = useAuthState();
  return (
    <div className="App">
      {data.message !== "Success" ? (
        <Login />
      ) : (
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
      )}
      {/* <Routes>
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
      </Routes> */}
    </div>
  );
}

export default App;
