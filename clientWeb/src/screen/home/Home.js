import React from "react";
import "./Home.css";
import Navbar from "../../component/navbar/Navbar";
import HowItWorks from "../../component/howitworks/HowItWorks";
import Footer from "../../component/footer/Footer";
import FooterHome from "../../component/footer/FooterHome";
import CardHomeSearch from "../../component/cardHomeSearch/CardHomeSearch";

export default function Home({ location }) {
  return (
    <div>
      <Navbar location={location} />
      <div className="wrapper_image_home">
        <div style={{ marginTop: 86, marginLeft: 99 }}>
          <p className="text1_home">Le troc participatif et solidaire !</p>
          <p className="text2_home">
            Recherchez autour de vous ce dont vous avez besoin et faites de
            place dans vos placards !
          </p>
        </div>
        <CardHomeSearch />
      </div>
      <HowItWorks />
      <FooterHome />
      <Footer />
    </div>
  );
}
