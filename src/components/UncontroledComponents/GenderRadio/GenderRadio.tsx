import React from 'react';
import { LegacyRef } from 'react';

interface GenderRadioProps {
  title: string;
  genderValue: string;
  defaultChecked?: boolean;
  name: string;
}

const GenderRadio = React.forwardRef(
  (
    { title, genderValue, name, defaultChecked }: GenderRadioProps,
    ref: LegacyRef<HTMLInputElement> | undefined
  ) => {
    return (
      <div>
        <label>
          <input
            type="radio"
            name={name}
            ref={ref}
            value={genderValue}
            defaultChecked={defaultChecked}
          />
          {title}
        </label>
      </div>
    );
  }
);

export default GenderRadio;
