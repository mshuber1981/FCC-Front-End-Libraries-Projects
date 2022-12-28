import React from "react";
import ReactDOM from "react-dom/client";
// https://reactjs.org/docs/context.html
import { AppProvider } from "./appContext";
// https://redux.js.org/tutorials/fundamentals/part-5-ui-react#passing-the-store-with-provider
import { Provider } from "react-redux";
import store from "./app/store";
// https://github.com/staylor/react-helmet-async
import { Helmet, HelmetProvider } from "react-helmet-async";
// https://create-react-app.dev/docs/adding-bootstrap
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";

// https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <AppProvider>
      <HelmetProvider>
        <Helmet>
          {/* Essential META Tags */}
          <meta property="og:title" content="FCC Front End Dev Libs Projects" />
          {/* https://ogp.me/#type_website */}
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://mshuber1981.github.io/FCC-Front-End-Libraries-Projects/fcc.png"
          />
          <meta
            property="og:url"
            content="https://mshuber1981.github.io/FCC-Front-End-Libraries-Projects/"
          />
          <meta name="twitter:card" content="summary_large_image" />
          {/* Non-Essential, But Recommended */}
          <meta
            property="og:description"
            content="My freecodecamp.org Front End Development Libraries projects."
          />
          <meta
            property="og:site_name"
            content="freecodecamp.org Front End Development Libraries projects"
          />
          <meta
            name="twitter:image:alt"
            content="freecodecamp.org Front End Development Libraries certificate"
          />
        </Helmet>
        <App />
      </HelmetProvider>
    </AppProvider>
  </Provider>
);
