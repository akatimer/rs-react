import React from 'react';
import { LegacyRef } from 'react';

interface GenderRadioProps {
  title: string;
  genderValue: string;
  defaultChecked?: boolean;
}

const GenderRadio = React.forwardRef(
  (
    { title, genderValue, defaultChecked }: GenderRadioProps,
    ref: LegacyRef<HTMLInputElement> | undefined
  ) => {
    return (
      <div>
        <label>
          <input
            type="radio"
            name="option"
            ref={ref}
            value={genderValue}
            defaultChecked={defaultChecked}
          />
          {title}
        </label>
        {/* <label>
          <input type="radio" name="option" ref={ref2} value="female" />
          Female
        </label> */}
      </div>
    );
  }
);

export default GenderRadio;
