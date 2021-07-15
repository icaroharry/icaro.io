import React from "react";

import { ReactComponent as GreenWave } from "./img/green-wave.svg";
import { ReactComponent as WhiteWave } from "./img/white-wave.svg";
import { ReactComponent as DarkWave } from "./img/dark-wave.svg";

import { Blog, Career, Footer, Header, Projects, Sidebar } from "./sections";

import useShowSidebar from "./hooks/useShowSidebar";

function App() {
  const showSidebar = useShowSidebar();

  return (
    <main className="App bg-darker pb-10 overflow-x-hidden">
      <Header />
      <GreenWave className="w-full -mt-20 sm:-mt-32 md:-mt-48 lg:-mt-64" />
      <Career />
      <WhiteWave className="w-full -mt-20 sm:-mt-32 md:-mt-40 lg:-mt-64" />
      <Projects />
      <DarkWave className="w-full -mt-12 sm:-mt-16 md:-mt-24 lg:-mt-48" />
      <Blog />
      <Footer />
      {showSidebar && <Sidebar />}
    </main>
  );
}

export default App;
