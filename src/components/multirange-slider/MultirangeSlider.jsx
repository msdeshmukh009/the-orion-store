import React, { useCallback, useEffect, useRef } from "react";
import "./multirangeSlider.css";

const MultiRangeSlider = ({ min, max }) => {
  const range = useRef(null);
  useEffect(() => {
    range.current.style.width = "100%";
  }, []);

  return (
    <>
      <div style={{ width: "0px" }}>
        <input type="range" min={min} max={max} step="100" value={min} className="thumb thumb-left" readOnly={true} />
        <input type="range" min={min} max={max} step="100" value={max} className="thumb thumb-right" readOnly={true} />
      </div>

      <div className="slider-container">
        <div className="slider-track" />
        <div ref={range} className="slider-range" />
        <div className="slider-left-value">{min}₹</div>
        <div className="slider-right-value">{max}₹</div>
      </div>
      <datalist className="range-datalist">
        <option value=".">.</option>
        <option value=".">.</option>
        <option value=".">.</option>
        <option value=".">.</option>
        <option value=".">.</option>
        <option value=".">.</option>
        <option value=".">.</option>
        <option value=".">.</option>
        <option value=".">.</option>
        <option value=".">.</option>
      </datalist>
    </>
  );
};

export { MultiRangeSlider };
