import React from 'react';
import { LegacyRef } from 'react';

interface DefaultInputProps {
  description: string;
  type: string;
}

const DefaultInput = React.forwardRef(
  (
    { description, type }: DefaultInputProps,
    ref: LegacyRef<HTMLInputElement> | undefined
  ) => {
    return (
      <label>
        <span>{description}</span>
        <input type={type} ref={ref} />
      </label>
    );
  }
);

export default DefaultInput;
