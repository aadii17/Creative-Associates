import React from "react";
import "../styles/services.css";

export default function Services() {
  return (
    <>
      <section className="service">
        <div className="section__container service__container">
          <h2 className="section__title">
            <span>What</span> we offer
          </h2>
          <div className="service__grid">
            <div className="service__card">
              <i className="ri-tools-fill"></i>
              <h4>Our services</h4>
              <p>
                • Modular kitchens <br />
                <br /> • Modular wardrobes <br />
                <br /> • Lighting
                <br />
                <br /> • Flooring <br />
                <br /> • Electrical work Civil work <br />
                <br /> • False ceiling Wall design & painting
              </p>
            </div>

            <div className="service__card">
              <i className="ri-wallet-3-fill"></i>
              <div className="content">
                <h4>Price benefits</h4>
                <p>
                  <br />
                  • Price-match guarantee3 - Price match to a valid quote in
                  comparison with a branded player and for exact scope. Flexible
                  payment options - EMI solutions and payment schemes from
                  leading financial partners.
                  <br />
                  <br /> • No hidden costs - Transparent costing without
                  last-minute additions.
                  <br />
                  <br />
                  <br />
                  <br />
                </p>
              </div>
            </div>
            <div className="service__card">
              <i className="ri-shield-star-fill"></i>
              <h4>Warranty</h4>
              <p>
                • FLAT 10-year warranty1 - Stay worry-free with our warranty
                policy on modular products. <br />
                <br />• Up to 1-year on-site service warranty1- Warranty on
                on-site services such as painting, electrical, plumbing and
                more.
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
