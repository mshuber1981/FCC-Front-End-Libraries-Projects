import React from "react";
import { useAppContext } from "./appContext";
import { HashRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
// Components
import GlobalStyles from "./components/GlobalStyles";
import { NavBar } from "./components/globalStyledComponents";
import Footer from "./components/Footer";
// Pages
import Home from "./pages/Home";
import QuoteMachine from "./pages/QuoteMachine";
import MarkdownPrev from "./pages/MarkdownPrev";
import DrumMachine from "./pages/DrumMachine";
import Calculator from "./pages/Calculator";
import Clock from "./pages/Clock";
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

export default function App() {
  const { theme, setTheme } = useAppContext();

  React.useEffect(
    function () {
      const updateTheme = () =>
        darkMode ? setTheme("dark") : setTheme("light");
      updateTheme();
    },
    [setTheme]
  );

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
        <GlobalStyles />
        <NavBar />
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Random-Quotes" element={<QuoteMachine />} />
            <Route path="/Markdown-Previewer" element={<MarkdownPrev />} />
            <Route path="/Drum-Machine" element={<DrumMachine />} />
            <Route path="/Calculator" element={<Calculator />} />
            <Route path="/Clock" element={<Clock />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </ThemeProvider>
    </HashRouter>
  );
}
