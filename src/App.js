import { Helmet } from "react-helmet-async";
import React, { useEffect } from "react";
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

  // useEffect(() => {
  //   const primaryFontSetter = getComputedStyle(document.documentElement).getPropertyValue('--primary-font');
  //   document.documentElement.style.setProperty('--primary-font', data.brandPallet.primaryFont)
  //   const secondaryFontSetter = getComputedStyle(document.documentElement).getPropertyValue('--secondary-font');
  //   document.documentElement.style.setProperty(`--secondary-font`, data.brandPallet.secondaryFont)
  //   const primaryColorSetter = getComputedStyle(document.documentElement).getPropertyValue('--primary-color');
  //   document.documentElement.style.setProperty(`--primary-color`, data.brandPallet.primaryColor)
  //   const secondaryColorSetter = getComputedStyle(document.documentElement).getPropertyValue('--secondary-color');
  //   document.documentElement.style.setProperty(`--secondary-color`, data.brandPallet.secondaryColor)
  //   const lightThemeBackgroundSetter = getComputedStyle(document.documentElement).getPropertyValue('--light-theme-background');
  //   document.documentElement.style.setProperty(`--light-theme-background`, data.brandPallet.lightThemeBackground)
  //   const darkThemeBackgroundSetter = getComputedStyle(document.documentElement).getPropertyValue('--dark-theme-background');
  //   document.documentElement.style.setProperty(`--dark-theme-background`, data.brandPallet.darkThemeBackground)
  //   const boxRadiusSetter = getComputedStyle(document.documentElement).getPropertyValue('--box-radius');
  //   document.documentElement.style.setProperty(`--box-radius`, data.brandPallet.boxRadius)
  //   const dropShadowSetter = getComputedStyle(document.documentElement).getPropertyValue('--drop-shadow');
  //   document.documentElement.style.setProperty(`--drop-shadow`, data.brandPallet.dropShadow)
  // },[])

  return (
    <>
      <Helmet>
        {data.docData.fontAwesome}
        <title>{data.docData.title}</title>
        <link rel='shortcut icon' href={data.docData.favicon}></link>
        {data.docData.fonts.map((element) => {return element})}
      </Helmet>
      <div className="App">
        <Header data={data.headerData}/>
        <Top data={data.topData}/>
        <TextImg data={data.textImgData}/>
        <ImgText data={data.imgTextData}/>
        <SpacerImage data={data.spacerImgageData}/>
        <DetailsBox data={data.detailsBoxData}/>
        <Text data={data.textData}/>
        <Text data={data.textData2}/>
        <Contact data={data.contactData}/>
        <Footer data={data.footerData}/>
      </div>
    </>
  );
}

export default App;
