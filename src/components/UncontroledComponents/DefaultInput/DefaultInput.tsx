import React from 'react';
import { LegacyRef } from 'react';

interface DefaultInputProps {
  description: string;
  type: string;
  name: string;
}

const DefaultInput = React.forwardRef(
  (
    { description, type, name }: DefaultInputProps,
    ref: LegacyRef<HTMLInputElement> | undefined
  ) => {
    return (
      <label>
        <span>{description}</span>
        <input type={type} ref={ref} name={name} />
      </label>
    );
  }
);

export default DefaultInput;
