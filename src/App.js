import React, { useEffect } from "react";
// https://react-redux.js.org/api/hooks#using-hooks-in-a-react-redux-app
import { useDispatch } from "react-redux";
import { fetchQuotes } from "./features/quotes/quotesSlice";
import NavBar from "./components/NavBar";
import Routes from "./components/Routes";
import Footer from "./components/Footer";

const App = () => {
  const dispatch = useDispatch();

  // Only fetching quotes data once when the app component mounts
  useEffect(() => {
    dispatch(fetchQuotes());
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <main className="d-flex flex-column vh-100 align-items-center justify-content-center bg-light overflow-auto">
        <Routes />
      </main>
      <Footer />
    </>
  );
};

export default App;
