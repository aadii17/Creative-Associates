import React from "react";
import "../styles/Partners.css";
import AsianPaint from "../assets/Logos/Asian Paints.png";
import Bosch from "../assets/Logos/Bosch-Logo-PNG1.png";
import CenturyPly from "../assets/Logos/CENTURYPLY.NS_BIG.png";
import Fabindia from "../assets/Logos/Fabindia.png";
import Hettich from "../assets/Logos/hettich-logo-vector.svg";
import Jaquar from "../assets/Logos/jaquarbrandlogo.jpg";
import Phillips from "../assets/Logos/philips-logo-511.jpg";
import Siemens from "../assets/Logos/Siemens.jpg";
import SaintGobain from "../assets/Logos/Saint-Gobain_logo_PNG2.png";

const Partners = () => {
  const partnerImages = [
    AsianPaint,
    Bosch,
    CenturyPly,
    Fabindia,
    Hettich,
    Jaquar,
    Phillips,
    SaintGobain, 
    Siemens,
    AsianPaint, 
    Bosch,     
    CenturyPly 
  ]; 

  return (
    <>
      <div className="slider">
        <p className="b"><b>Our trusted partners</b></p>
        <br />
        <p className="h">Winning collaborations that produce winning designs.</p>
        <br />
        <br />
        <div className="slide-track">
          {partnerImages.map((image, index) => (
            <div className="slide" key={index}>
              <img className="brands" src={image}  alt={`Partner ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Partners;
