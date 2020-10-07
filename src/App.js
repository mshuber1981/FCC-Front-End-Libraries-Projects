import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchQuotes } from "./features/quotes/quotesSlice";
import NavBar from "./components/NavBar";
import Routes from "./components/Routes";
import Footer from "./components/Footer";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuotes());
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <main className="bg-secondary">
        <Routes />
      </main>
      <Footer />
    </>
  );
};

export default App;
