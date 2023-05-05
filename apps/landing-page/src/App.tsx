import "./App.css";

import load from "continuum";
import useFullscreen from "ahooks/lib/useFullscreen";
import useBoolean from "ahooks/lib/useBoolean";

import Background from "./components/Background";
import Header from "./components/Header";
import Overview from "./components/Overview";
import Features from "./components/Features";
import Comparison from "./components/Comparison";
import Components from "./components/Components";
import Footer from "./components/Footer";

load("button", "alert", "input", "toggle", "check", "slider");

function App() {
  const [viewVisible, { setTrue: showView }] = useBoolean();

  const [isFullscreen, { enterFullscreen }] = useFullscreen(
    document.documentElement
  );

  return (
    <main>
      <div
        style={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 0,
          padding: 0,
        }}
      >
        <Background showView={showView} viewVisible={viewVisible} />
      </div>
      {viewVisible && (
        <>
          <Header />
          <Overview />
          <Features />
          <Components />
          <Comparison />
          <Footer />
        </>
      )}
      <img
        src="/bg.svg"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: -100,
        }}
        alt=""
      />
    </main>
  );
}

export default App;
