import React from "react";
import Header from "./components/Header";
import Top from "./components/Top";
import DetailsBox from "./components/DetailsBox";
import SpacerImage from "./components/SpacerImage";
import TextImg from "./components/TextImg";
import ImgText from './components/ImgText';
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Text from "./components/Text";
import * as data from './data/data';

function App() {

  return (
    <div className="App">
      <Header data={data.headerData}/>
      <Top data={data.topData}/>
      <TextImg data={data.textImgData}/>
      <SpacerImage data={data.spacerImgageData}/>
      <DetailsBox data={data.detailsBoxData}/>
      <Text data={data.textData}/>
      <Text data={data.textData2}/>
      <Contact data={data.contactData}/>
      <Footer data={data.footerData}/>
    </div>
  );
}

export default App;
