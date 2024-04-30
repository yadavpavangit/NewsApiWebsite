import "./App.css";
import Slider, { Banner, FetchApi, Footer } from "./component/Home";
import Nationalnews from "./component/National";
import Navigation from "./component/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import Businessnews from "./component/business";
import Sportsnews from "./component/Sportsnews";
import Worldnews from "./component/Worldnews";
import Politicsnews from "./component/Politicsnews";
import Technologynews from "./component/Technologynews";
import Startupnews from "./component/Startupnews";
import Entertainmentnews from "./component/Entertainmentnews";
import Sciencenews from "./component/Sciencenews";
import Automobilenews from "./component/miscellaneous";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return <></>;
}

function Header() {
  return (
    <>
      <Navigation />
      <Slider />
      <Banner />
      <FetchApi />
      <Footer />
    </>
  );
}

function National() {
  return (
    <>
      <Navigation />
      <Nationalnews />
      <Footer />
    </>
  );
}

function Business() {
  return (
    <>
      <Navigation />
      <Businessnews />
      <Footer />
    </>
  );
}

function Sports() {
  return (
    <>
      <Navigation />
      <Sportsnews />
      <Footer />
    </>
  );
}

function World() {
  return (
    <>
      <Navigation />
      <Worldnews />
      <Footer />
    </>
  );
}
function Politics() {
  return (
    <>
      <Navigation />
      <Politicsnews />
      <Footer />
    </>
  );
}
function Technology() {
  return (
    <>
      <Navigation />
      <Technologynews />
      <Footer />
    </>
  );
}
function Startup() {
  return (
    <>
      <Navigation />
      <Startupnews />
      <Footer />
    </>
  );
}
function Entertainment() {
  return (
    <>
      <Navigation />
      <Entertainmentnews />
      <Footer />
    </>
  );
}
function Science() {
  return (
    <>
      <Navigation />
      <Sciencenews />
      <Footer />
    </>
  );
}
function Miscellaneous() {
  return (
    <>
      <Navigation />
      <Automobilenews />
      <Footer />
    </>
  );
}

function WebPages() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}></Route>
          <Route path="/national" element={<National />}></Route>
          <Route path="/business" element={<Business />}></Route>
          <Route path="/sports" element={<Sports />}></Route>
          <Route path="/world" element={<World />}></Route>
          <Route path="/politics" element={<Politics />}></Route>
          <Route path="/technology" element={<Technology />}></Route>
          <Route path="/startup" element={<Startup />}></Route>
          <Route path="/entertainment" element={<Entertainment />}></Route>
          <Route path="/miscellaneous" element={<Miscellaneous />}></Route>

          <Route path="/science" element={<Science />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
export { WebPages };
