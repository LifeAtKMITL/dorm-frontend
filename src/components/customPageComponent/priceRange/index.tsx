import React from 'react';
// import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import './priceRange.css';

function valuetext(value: number) {
  return `${value}°C`;
}

const RangeSlider = (props: any) => {
  const [value, setValue] = React.useState<number[]>([0, 20000]);
  const [x, setX] = React.useState(0);
  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  const increase = () => [setX((prev) => prev + 1)];

  // send props to custom
  props.func(value);

  // end of send props
  return (
    <div className='priceRange-container'>
      <fieldset className='priceRangeBox'>
        <ul className='desc'>
          <li>Choose the price range that suits your budget.</li>
        </ul>
        <legend className='textAtBorder font-link'>PRICE - RANGE</legend>
        <div className='prBox'>
          <Slider
            // color='primary'
            min={0}
            max={20000}
            getAriaLabel={() => 'Temperature range'}
            value={value}
            onChange={handleChange}
            valueLabelDisplay='on'
            getAriaValueText={valuetext}
          />
        </div>
      </fieldset>
      {/* <div style={{ color: 'white' }}>
        {x}
        <button onClick={increase}>click me</button>
      </div> */}
    </div>
  );
};

export default RangeSlider;
