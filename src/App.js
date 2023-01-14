import React from "react";
import Header from "./components/Header";
import Top from "./components/Top";
import Services from "./components/Services";
import SpacerImage from "./components/SpacerImage";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
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
      <About />
      <SpacerImage />
      <Services />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
