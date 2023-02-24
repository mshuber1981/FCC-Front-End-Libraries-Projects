import React from "react";
import { useAppContext } from "./appContext";
import { useDispatch } from "react-redux";
import { fetchQuotes } from "./features/quotes/quotesSlice";
import { HashRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
// Components
import ScrollToTop from "./components/ScrollToTop";
import GlobalStyles from "./components/GlobalStyles";
import NavBar from "./components/NavBar";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
// Pages
import Home from "./pages/Home";
import QuoteMachine from "./pages/QuoteMachine";
import MarkdownPrev from "./pages/MarkdownPrev";
import DrumMachine from "./pages/DrumMachine";
import Calculator from "./pages/Calculator";
import ClockPage from "./pages/ClockPage";
import NotFound from "./pages/NotFound";

const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
const themes = {
  light: {
    name: "light",
    color: "#45413C",
    background: "#F5F2E8",
  },
  dark: {
    name: "dark",
    color: "#FBFDFF",
    background: "#27272A",
  },
};
const navLinks = [
  {
    id: 1,
    name: "Home",
    route: "/",
  },
  {
    id: 2,
    name: "Random Quotes",
    route: "/Random-Quotes",
  },
  {
    id: 3,
    name: "Markdown Previewer",
    route: "/Markdown-Previewer",
  },
  {
    id: 4,
    name: "Drum Machine",
    route: "/Drum-Machine",
  },
  {
    id: 5,
    name: "Calculator",
    route: "/Calculator",
  },
  {
    id: 6,
    name: "Clock",
    route: "/Clock",
  },
];

export default function App() {
  const { theme, setTheme } = useAppContext();
  const dispatch = useDispatch();

  // Quotes
  React.useEffect(() => {
    dispatch(fetchQuotes());
  }, [dispatch]);

  React.useEffect(
    function () {
      const updateTheme = () =>
        darkMode ? setTheme("dark") : setTheme("light");
      updateTheme();
    },
    [setTheme]
  );

  // Styles for FCC test menu
  React.useEffect(function () {
    const input = document
      .querySelector("#fcc_test_suite_wrapper")
      .shadowRoot.querySelector("#fcc_toggle");

    const tests = document
      .querySelector("#fcc_test_suite_wrapper")
      .shadowRoot.querySelector("#fcc_foldout_toggler");

    const background = document
      .querySelector("#fcc_test_suite_wrapper")
      .shadowRoot.querySelector("#fcc_foldout_toggler_background");

    input.style.top = "1.1rem";
    input.style.left = "4.8rem";
    tests.style.top = "1.75rem";
    tests.style.left = "5rem";
    background.style.background = "rgba(255, 255, 204, 0.8)";
  }, []);

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) =>
      e.matches ? setTheme("dark") : setTheme("light")
    );

  return (
    <HashRouter>
      <ThemeProvider theme={themes[theme]}>
        <ScrollToTop />
        <GlobalStyles />
        <NavBar navLinks={navLinks} />
        <main>
          <Container>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/Random-Quotes" element={<QuoteMachine />} />
              <Route path="/Markdown-Previewer" element={<MarkdownPrev />} />
              <Route path="/Drum-Machine" element={<DrumMachine />} />
              <Route path="/Calculator" element={<Calculator />} />
              <Route path="/Clock" element={<ClockPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </ThemeProvider>
    </HashRouter>
  );
}
