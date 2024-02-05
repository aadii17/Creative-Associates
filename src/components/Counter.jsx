import React, { useState, useEffect } from "react";
import "../styles/Counter.css";

export default function Counter() {
  const interval = 200;

  const counters = [
    { label: "Projects", value: 20 },
    { label: "Followers", value: 190 },
    { label: "Clients", value: 50 },
    { label: "Cities", value: 5 },
  ];

  const [values, setValues] = useState(counters.map(counter => 0));

  useEffect(() => {
    const intervals = counters.map(({ value }, index) => {
      const duration = Math.floor(interval / value);
      const counter = setInterval(() => {
        setValues((prevValues) => {
          const newValues = [...prevValues];
          newValues[index] = Math.min(newValues[index] + 1, value); 
          return newValues;
        });
      }, duration);

      return counter;
    });

    return () => {
      intervals.forEach((counter) => clearInterval(counter));
    };
  }, [counters]);

  return (
    <div className="wrapper">
      <h2 className="heading">Let our numbers do the talking!</h2>
      {counters.map(({ label }, index) => (
        <div key={index} className="containers">
          <br />
          <span className="num">{values[index]}+</span>
          <span className="text">{label}</span>
        </div>
      ))}
    </div>
  );
}
