import React from "react";
import Header from "./components/Header";
import Top from "./components/Top";
import DetailsBox from "./components/DetailsBox";
import SpacerImage from "./components/SpacerImage";
import TextImg from "./components/TextImg";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { docData } from "./data/data";

function App() {

  (() => {
    document.querySelector('title').textContent = docData.siteTitle;
    const headTitle = document.querySelector('head');
    const setFavicon = document.createElement('link');
    setFavicon.setAttribute('rel','shortcut icon');
    setFavicon.setAttribute('href',docData.faviconURL);
    headTitle.appendChild(setFavicon);
  })();

  return (
    <div className="App">
      <Header />
      <Top />
      <TextImg />
      <SpacerImage />
      <DetailsBox />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
