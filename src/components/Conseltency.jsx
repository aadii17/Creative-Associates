import React from "react";
import "../styles/Conseltency.css";

export default function Conseltency() {
  const phoneNumber = "7058365559"; // Replace with your phone number

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };
  return (
    <>
      <section className="service">
        <div className="section__container">
          <h2 className="section__title">
            <span>Book Free</span> Consultation
          </h2>
          <div className="button-container">
            <div className="btn-black">
              <h3>
                <a onClick={handleWhatsApp}>Whatsapp</a>
              </h3>
            </div>
            <div className="btn-black">
              <h3>
                <a onClick={handleCall}>Call Now</a>
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
