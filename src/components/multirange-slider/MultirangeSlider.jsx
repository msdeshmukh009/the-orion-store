import "./multirangeSlider.css";
import React, { useCallback, useEffect, useRef } from "react";
import { useFilter } from "../../context";
import { filterActions } from "../../reducer/constant";

const { SET_MIN, SET_MAX } = filterActions;

const MultiRangeSlider = ({ min, max }) => {
  const { state, dispatch } = useFilter();
  const { min: minVal, max: maxVal } = state.range;
  const range = useRef(null);

  const getPercent = useCallback(
    value => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent, maxVal]);

  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent, minVal]);

  return (
    <>
      <div style={{ width: "0px" }}>
        <input
          type="range"
          min={min}
          max={max}
          step="100"
          value={minVal}
          onChange={event => {
            const value = Math.min(Number(event.target.value), maxVal - 100);
            dispatch({ type: SET_MIN, payload: value });
          }}
          className="thumb thumb-left"
          style={{ zIndex: minVal > max - 100 && "5" }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step="100"
          value={maxVal}
          className="thumb thumb-right"
          onChange={event => {
            const value = Math.max(Number(event.target.value), minVal + 100);
            dispatch({ type: SET_MAX, payload: value });
          }}
        />
      </div>

      <div className="slider-container">
        <div className="slider-track" />
        <div ref={range} className="slider-range" />
        <div className="slider-left-value">{minVal}₹</div>
        <div className="slider-right-value">{maxVal}₹</div>
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
